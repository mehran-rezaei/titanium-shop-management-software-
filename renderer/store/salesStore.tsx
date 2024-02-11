import { create } from "zustand";

interface IList {
  selectedPage: number;
  selectPage: (newPage: number) => void;
  pageComponentMap: Record<number, string>;
}

const usePageStore = create<IList>((set) => ({
  selectedPage: 1, // Default selected page is 'Document'
  selectPage: (newPage) => set(() => ({ selectedPage: newPage })),
  pageComponentMap: {
    1: "Dashboard",
    2: "Documents",
    3: "Products",
    4: "Stock",
    5: "Reporting",
    6: "Customers_&_Suppliers",
    7: "Promotions_&_Actions",
    8: "Users_&_Secunity",
    9: "Print_stations",
    10: "Payment_Types",
    11: "Countries",
    12: "Tax_Rates",
    13: "My_Company",
    // Add more mappings for other pages
  },
}));

export default usePageStore;
