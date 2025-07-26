'use client';

import BackButton from '@/components/BackButton';
import { cars } from '@/data/cars';
import { formatPrice } from '@/utils';
import { useParams } from 'next/navigation';

export default function HomePage() {
  const params = useParams<{ id: string }>();
  const carId = Number(params.id);

  const result = cars.find((car) => car.id === carId);

  if (!result) {
    return <p>Машина не найдена</p>;
  }

  return (
    <>
      <BackButton />
      <img
        src={result.image}
        alt={`${result.brand} ${result.model}`}
        width={100}
      />
      <div>
        <p>{result.brand}</p>
        <p>{result.model}</p>
        <p>{result.year}</p>
        <p>{formatPrice(result.pricePerHour)}</p>
        <p>{result.location}</p>
        <p>{result.seats}</p>
        <p>{result.transmission}</p>
        <p>{result.rangePerCharge}</p>
        <p>{result.fuelType}</p>
        <p>{result.available}</p>
        <p>{result.description}</p>
        <p>{result.rating}</p>
        <div>
          <p>{result.owner.name}</p>
          <p>{result.owner.phone}</p>
        </div>
      </div>
    </>
  );
}
