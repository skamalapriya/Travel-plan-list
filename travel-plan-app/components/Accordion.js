import AccordionUI from "./AccordionUI";

function Accordion() {
  const Category = [
    "Outfit & Accessories",
    "Toiletries",
    "Medical Aids",
    "Electronic Accessories",
    "Documents",
    "Miscellaneous",
  ];

  return (
    
    <div>
      <h1 className="items-center">
        Travel Plan List
      </h1>
      {Category.map((item) => (
        <AccordionUI section={item} />
      ))}
    </div>
  );
}

export default Accordion;
