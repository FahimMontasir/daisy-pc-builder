import { useAppSelector } from "@/lib/redux/hooks";
import { useRouter } from "next/router";
import { useState } from "react";

export default function PCBuildPage() {
  const [success, setSuccess] = useState(false);
  const { push } = useRouter();
  const { selectedItems } = useAppSelector((state) => state.builder);

  const isBuildAllowed = Object.entries(selectedItems).length;

  const allComponents = [
    {
      category: "CPU / Processor",
      link: "cpu",
      selectedItem: selectedItems["cpu"],
    },
    {
      category: "Motherboard",
      link: "motherboard",
      selectedItem: selectedItems["motherboard"],
    },
    { category: "RAM", link: "ram", selectedItem: selectedItems["ram"] },
    {
      category: "Power Supply Unit",
      link: "power-supply",
      selectedItem: selectedItems["power-supply"],
    },
    {
      category: "Storage Device",
      link: "storage",
      selectedItem: selectedItems["storage"],
    },
    {
      category: "Monitor",
      link: "monitor",
      selectedItem: selectedItems["monitor"],
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Category</th>
            <th>Selected item</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {allComponents.map((c) => (
            <tr key={c.category}>
              <td>
                <p className="font-bold">{c.category}</p>
              </td>
              <td>
                {c.selectedItem ? (
                  <div>
                    {c.selectedItem.productName}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      ${c.selectedItem.price}
                    </span>
                  </div>
                ) : (
                  <div>
                    You have not selected anything for this category!
                    <br />
                    <span className="badge badge-warning badge-sm">Empty</span>
                  </div>
                )}
              </td>
              <th>
                <button
                  className="btn"
                  onClick={() => push(`/build/${c.link}`)}
                >
                  Choose
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex flex-col items-center">
        <button
          onClick={() => setSuccess(true)}
          disabled={isBuildAllowed < 5 || success}
          className="btn btn-neutral w-[200px]"
        >
          Build Now!
        </button>
      </div>
      {success && (
        <div className="alert alert-success">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Your purchase has been confirmed!</span>
        </div>
      )}
    </div>
  );
}
