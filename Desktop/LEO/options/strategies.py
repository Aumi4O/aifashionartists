import pandas as pd


def covered_call_candidates(
    chain_df: pd.DataFrame,
    target_delta: float = 0.30,
    dte_min: int = 21,
    dte_max: int = 60,
    min_open_interest: int = 100,
):
    """Filter options chain for covered-call candidates.

    Expects OpenBB chain schema with columns: option_type, dte, delta, open_interest, bid, ask.
    Returns a DataFrame of top candidates near target delta within DTE window.
    """
    if chain_df.empty:
        return chain_df

    calls = chain_df.copy()
    if "option_type" in calls.columns:
        calls = calls[calls["option_type"].str.lower() == "call"]

    if "dte" in calls.columns:
        calls = calls[calls["dte"].between(dte_min, dte_max)]

    if "delta" in calls.columns:
        calls = calls[calls["delta"].abs().between(0.05, 0.95)]

    if "open_interest" in calls.columns:
        calls = calls[calls["open_interest"] >= min_open_interest]

    if calls.empty:
        return calls

    # Rank by closeness to target delta, then by tighter spread if available
    calls = calls.assign(delta_gap=(calls["delta"] - target_delta).abs())
    if {"bid", "ask"}.issubset(calls.columns):
        calls = calls.assign(spread=(calls["ask"] - calls["bid"]).abs())
        calls = calls.sort_values(["delta_gap", "expiration", "spread"])  # type: ignore
    else:
        calls = calls.sort_values(["delta_gap", "expiration"])  # type: ignore

    keep_cols = [
        c
        for c in [
            "contract_symbol",
            "expiration",
            "strike",
            "delta",
            "bid",
            "ask",
            "open_interest",
            "volume",
            "dte",
        ]
        if c in calls.columns
    ]
    return calls[keep_cols].head(10)



