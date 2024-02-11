function List_item({ data, index }: any) {
  // const { Barcode, Name, Unit, Unitprice, Qty, Discountvat, Amount } = data;
  console.log(data.name);
  // {
  //   "id": 1,
  //   "name": "water",
  //   "productQuantity": 1,
  //   "barcode": "34567823",
  //   "unitOfMeasure": "Piece",
  //   "price": 19.99,
  //   "totalDiscount": 0,
  //   "totalAmount": 19.99
  // }
  return (
    <div className="text-white flex gap-3 bg-[#00CEC9] px-10 py-2">
      {index}
      <p>{data.name}</p>
      <p>{data.productQuantity}</p>
    </div>
  );
}

export default List_item;
