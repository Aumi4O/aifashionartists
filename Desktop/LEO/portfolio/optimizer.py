from typing import Dict, Tuple

import pandas as pd
from pypfopt import EfficientFrontier, expected_returns, risk_models


def mean_var_weights(prices_df: pd.DataFrame, max_weight: float = 0.2) -> Tuple[Dict[str, float], Tuple[float, float, float]]:
    """Compute Max Sharpe weights from historical prices.

    Returns a tuple: (cleaned_weights, (ret, vol, sharpe)).
    """
    mu = expected_returns.mean_historical_return(prices_df)
    cov_matrix = risk_models.CovarianceShrinkage(prices_df).ledoit_wolf()
    ef = EfficientFrontier(mu, cov_matrix, weight_bounds=(0.0, max_weight))
    weights = ef.max_sharpe()
    cleaned = ef.clean_weights()
    perf = ef.portfolio_performance()
    return cleaned, perf



