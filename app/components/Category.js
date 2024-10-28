"use client"
import { useEffect, useState } from "react";
import getCategory from "../lib/getCategory";

export default function Category() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const data = getCategory();
    console.log("Fetched category data:", data);
    if (Array.isArray(data)) {
      setCategory(data);
    } else {
      console.error("Expected an array but received:", data);
    }
  }, []);

  return (
    <div className="pt-[30px] w-full lg:w-[1102px] ">
      <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-[26px] gap-2">
        {category.length > 0 ? (
          category.map((item, idx) => (
            <div key={idx} className="flex items-center gap-[40px] w-[256px] lg:py-[20px] lg:px-[15px] border-[1px] border-[#0000000D] rounded-[8px]">
              <div>
              <item.icon /> 
              </div>
              <div>
                <h1 className="font-semibold text-[24px] font-[Urbanist] leading-[28.8px] tracking-tight text-[#000000]"> {item.Count}</h1>
                <h1 className="font-[Urbanist] font-normal	text-[14px] leading-[16.8px] text-[#757D85]">{item.type}</h1>
              </div>
             
            </div>
          ))
        ) : (
          <p>No categories available.</p>
        )}
      </div>
    </div>
  );
}
