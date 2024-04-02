import { Order } from "@/types";
import { Progress } from "./ui/progress";
import { ORDER_STATUS } from "@/config/order-status-config";

type Props = {
  order: Order;
  isDelivered: boolean;
};

const OrderStatusHeader = ({ order, isDelivered }: Props) => {
  const getExpectedDelivery = () => {
    const created = new Date(order.createdAt);

    created.setMinutes(
      created.getMinutes() + order.restaurant.estimatedDeliveryTime
    );

    const hours = created.getHours();
    const minutes = created.getMinutes();

    const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${hours}:${paddedMinutes}`;
  };

  const getOrderStatusInfo = () => {
    return (
      ORDER_STATUS.find((os) => order.status === os.value) || ORDER_STATUS[0]
    );
  };

  return (
    <>
      <h1 className="flex flex-col gap-5 text-4xl font-bold tracking-tighter md:flex-row md:justify-between">
        <span>Order Status: {getOrderStatusInfo().label}</span>
        {!isDelivered && <span>Expected by: {getExpectedDelivery()}</span>}
      </h1>
      <Progress
        className="animate-pulse"
        value={getOrderStatusInfo().progressValue}
      />
    </>
  );
};

export default OrderStatusHeader;
