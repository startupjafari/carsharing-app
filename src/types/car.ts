export interface Car {
    id: number;
    brand: string;
    model: string;
    year: number;
    image: string;
    pricePerHour: number;
    location: string;
    seats: number;
    transmission: "AT" | "MT";
    fuelType: "electric" | "petrol" | "diesel" | "hybrid";
    rangePerCharge?: number;
    available: boolean;
    description: string;
    rating: number;
    owner: {
        name: string;
        phone: string;
    };
}
