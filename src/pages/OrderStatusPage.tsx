import SpinningWheel from "@/SpinningWheel";
import { useGetMyOrders } from "@/api/OrderApi";
import OrderStatusDetail from "@/components/OrderStatusDetail";
import OrderStatusHeader from "@/components/OrderStatusHeader";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const OrderStatusPage = () => {
  const { orders, isLoading } = useGetMyOrders();
  if (isLoading) {
    return <SpinningWheel />;
  }

  if (!orders || orders.length === 0) {
    return "No orders found";
  }

  return (
    <div className="space-y-10">
      {orders
        .sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt))
        .map((order) => {
          const isDelivered = order.status === "delivered";
          return (
            <div
              className={`p-10 space-y-10 rounded-lg ${
                isDelivered ? "opacity-50" : "opacity-100"
              } bg-gray-50`}
              key={`order-${order._id}`}
            >
              <OrderStatusHeader order={order} isDelivered={isDelivered} />
              <div className="grid gap-10 md:grid-cols-2">
                <OrderStatusDetail order={order} />
                <AspectRatio ratio={16 / 5}>
                  <img
                    src={order.restaurant.imageUrl}
                    className="object-cover w-full h-full rounded-md"
                  />
                </AspectRatio>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default OrderStatusPage;
