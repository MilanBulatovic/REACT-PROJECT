import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item:string) => void;
}

function ListGroup({items, heading, onSelectItem}: ListGroupProps) {
    //const items = ["Paris", "London", "New York", "Tokyo", "Sydney"];
    //Hook
    const [selectItemIndex, setSelectItemIndex] = useState(-1)
     
    return (
      <>
        <h1>{heading}</h1>
        {items.length === 0 && <p>Nothing found</p> }
        <ul className="list-group">
          {items.map((item, index) => (
            <li 
              className={selectItemIndex === index ? 'list-group-item active' : 'list-group-item'} 
              key={item} 
              onClick={()=>{setSelectItemIndex(index); onSelectItem(item)}}>
                
                {item}
              
            </li>
          ))}
        </ul>
      </>
  );
}

export default ListGroup;

// const handlClick = (item: string, index: number) => (event: MouseEvent<HTMLLIElement>) => {
//   console.log(event.target, item, index);
// };

// return (
//   <>
//       <h1>List</h1>
//       {items.length === 0 && <p>Nothing found</p>}
//       <ul className="list-group">
//           {items.map((item, index) => (
//               <li className="list-group-item" key={item} onClick={handlClick(item, index)}>{item}</li>
//           ))}
//       </ul>
//   </>
// );