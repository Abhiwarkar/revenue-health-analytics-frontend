const BASE_URL = "http://127.0.0.1:8000";

export const fetchMonthlyRevenue = async () => {
  const response = await fetch(`${BASE_URL}/revenue/monthly`);
  return response.json();
};

export const fetchRevenueHealth = async () => {
  const response = await fetch(`${BASE_URL}/dashboard/health`);
  return response.json();
};

export const fetchRegionPerformance = async () => {
  const response = await fetch(
    "http://127.0.0.1:8000/revenue/region-performance"
  );
  return response.json();
};
