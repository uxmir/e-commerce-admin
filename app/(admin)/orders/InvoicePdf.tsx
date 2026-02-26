import { useColorStatus } from "@/app/CustomHooks/useColorStatus";
import { tableProps } from "@/app/types/homeTable";
interface invoiceProps {
  printedData: tableProps;
  container_class?:string
}
const InvoicePdf: React.FC<invoiceProps> = ({ printedData,container_class }) => {
const {getStyle}=useColorStatus()
  return (
    <>
      <div className={`w-[800px]  bg-white  ${container_class}`}>
        {/* Invoice Header */}
        <div className="flex justify-between items-center border-b pb-6 mb-6">
          <div>
            <h1 className="text-3xl font-bold uppercase tracking-wider text-blue-600">
              Invoice
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Invoice ID: #{printedData?.invoice_id}
            </p>
          </div>
          <div className="text-right">
            <h2 className="font-bold text-lg">Your Shop Name</h2>
            <p className="text-xs text-gray-500">Dhaka, Bangladesh</p>
            <p className="text-xs text-gray-500">support@mirshop.com</p>
          </div>
        </div>

        {/* Billing Details */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div>
            <p className="text-xs uppercase text-gray-400 font-bold mb-1">
              Bill To:
            </p>
            <h3 className="font-bold text-lg capitalize">
              {printedData?.customer_name}
            </h3>
            <p className="text-sm text-gray-600">
              Customer ID: {printedData?.id}
            </p>
            <p className="text-sm text-gray-600">Date: {printedData?.date}</p>
          </div>
          <div className="text-right">
            <p className={`text-xs uppercase  font-bold mb-1`}>
              Payment Status:
            </p>
            <span
              className={`text-sm font-bold px-2 py-1 bg-gray-100 rounded uppercase ${getStyle(printedData?.status)}`}
            >
              {printedData?.status}
            </span>
            <p className="text-xs mt-3 uppercase text-gray-400 font-bold mb-1">
              Method:
            </p>
            <p className="text-sm font-semibold capitalize">
              {printedData?.method}
            </p>
          </div>
        </div>

        {/* Items Table */}
        <table className="w-full text-left border-collapse mb-8">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="py-3 text-sm font-bold uppercase">Description</th>
              <th className="py-3 text-right text-sm font-bold uppercase">
                Quantity
              </th>
              <th className="py-3 text-right text-sm font-bold uppercase">
                Unit Price
              </th>
              <th className="py-3 text-right text-sm font-bold uppercase">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-4 text-sm">
                Product Order - {printedData?.invoice_id}
              </td>
              <td className="py-4 text-right text-sm">1</td>
              <td className="py-4 text-right text-sm">
                ${printedData?.amount}
              </td>
              <td className="py-4 text-right text-sm font-semibold">
                ${printedData?.amount}
              </td>
            </tr>
          </tbody>
        </table>

        {/* Summary Area */}
        <div className="flex justify-end">
          <div className="w-64">
            <div className="flex justify-between py-2 border-b">
              <span className="text-sm text-gray-600">Subtotal:</span>
              <span className="text-sm font-semibold">
                ${printedData?.amount}
              </span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-sm text-gray-600">Tax (0%):</span>
              <span className="text-sm font-semibold">$0.00</span>
            </div>
            <div className="flex justify-between py-3 mt-1 bg-gray-50 px-2">
              <span className="font-bold">Total Amount:</span>
              <span className="font-bold text-lg text-blue-700">
                ${printedData?.amount}
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center border-t pt-6">
          <p className="text-sm font-semibold">Thank you for your business!</p>
          <p className="text-xs text-gray-400 mt-1">
            This is a computer generated invoice and needs no signature.
          </p>
        </div>
      </div>
    </>
  );
};

export default InvoicePdf
