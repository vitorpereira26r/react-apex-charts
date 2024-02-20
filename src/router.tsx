import React from "react";
import { Route, Routes } from "react-router-dom";
import { PizzaChartPage } from "./Pages/PizzaChartPage";
import { ColumnChartPage } from "./Pages/ColumnChartPage";
import { FinancialSummaryPage } from "./Pages/FinancialSummaryPage";

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/pizza-charts" element={<PizzaChartPage/>}/>
      <Route path="/column-charts" element={<ColumnChartPage/>}/>
      <Route path="/financial-charts" element={<FinancialSummaryPage/>}/>
    </Routes>
  );
};