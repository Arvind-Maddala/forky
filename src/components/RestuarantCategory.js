import RestuarantItemsList from "./RestuarantItemsList";

const RestuarantCategory = ({ category, showItems, handleClick, index }) => {
  const {
    card: {
      card: { title, itemCards },
    },
  } = category;

  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-4  py-8 px-4  border-b-[24px] border-gray-100">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => handleClick(index)}
        >
          <h3 className="text-2xl font-bold">
            {" "}
            {title}({itemCards.length}){}
          </h3>
          <span>
            {showItems ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </span>
        </div>
        {showItems && <RestuarantItemsList items={itemCards} />}
      </div>
    </div>
  );
};

export default RestuarantCategory;
