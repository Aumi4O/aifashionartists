import os
from typing import List, Optional, Union

from dotenv import load_dotenv

# Load env early for provider keys
load_dotenv()

try:
    from openbb import obb
except Exception as exc:  # pragma: no cover
    raise RuntimeError(
        "OpenBB is required. Install dependencies with `pip install -r requirements.txt`."
    ) from exc


def quote(symbols: Union[str, List[str]]):
    """Return L1 quote(s) as a pandas DataFrame."""
    return obb.equity.price.quote(symbol=symbols).to_dataframe()


def options_chain(symbol: str, provider: Optional[str] = None):
    """Return options chain for a symbol as a pandas DataFrame.

    If provider is None, uses OpenBB's configured defaults/fallbacks.
    """
    kwargs = {"symbol": symbol}
    if provider:
        kwargs["provider"] = provider
    return obb.derivatives.options.chains(**kwargs).to_dataframe()


def history(symbol: Union[str, List[str]], period: str = "1y"):
    """Return historical adjusted price series for symbol(s)."""
    return obb.equity.price.historical(symbol, period=period).to_dataframe()



