import { Restaurant } from "@/types"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Dot } from "lucide-react";

type Props = {
    restaurant: Restaurant;
}

const RestaurantInfo = ({restaurant}: Props) => {
    return <Card className="border-sla" key={`${restaurant._id}-card`}>
        <CardHeader>
            <CardTitle className="text-3xl tracking-tight font0bold">
                {restaurant.restaurantName}
            </CardTitle>
            <CardDescription>
                {restaurant.city}, {restaurant.country}
            </CardDescription>
        </CardHeader>
        <CardContent className="flex">
            {restaurant.cuisines.map((item, index, list) => (
                <span className="flex" key={`${index}-${item}`}>
                    <span>{item}</span>
                    {index < list.length - 1 && <Dot />}
                </span>
            ))}
        </CardContent>
    </Card>
}

export default RestaurantInfo;