import { Space, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  taxId: number;
  name: string;
  rate: number;
  code: string;
  isFixed: boolean;
  isTaxOnTotal: boolean;
  isEnabled: boolean;
  amount: number;
}

export const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Rate",
    dataIndex: "rate",
    key: "rate",
  },
  {
    title: "Code",
    dataIndex: "code",
    key: "code",
  },
  {
    title: "isFixed",
    dataIndex: "isFixed",
    key: "isFixed",
  },
//   {
//     title: "isTaxOnTotal",
//     dataIndex: "isTaxOnTotal",
//     key: "isTaxOnTotal",
//   },{
//     title: "isEnabled",
//     dataIndex: "isEnabled",
//     key: "isEnabled",
//   },
  //   {
  //     title: "Tags",
  //     key: "tags",
  //     dataIndex: "tags",
  //     render: (_, { tags }) => (
  //       <>
  //         {tags.map((tag) => {
  //           let color = tag.length > 5 ? "geekblue" : "green";
  //           if (tag === "loser") {
  //             color = "volcano";
  //           }
  //           return (
  //             <Tag color={color} key={tag}>
  //               {tag.toUpperCase()}
  //             </Tag>
  //           );
  //         })}
  //       </>
  //     ),
  //   },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
  },
];
