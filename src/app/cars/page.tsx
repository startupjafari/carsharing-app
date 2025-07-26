import BackButton from '@/components/BackButton';
import { cars } from '@/data/cars';
import Link from 'next/link';

export default function CarsPage() {
  return (
    <>
      <BackButton />
      <h1>Список автомобилей</h1>
      <ul>
        {cars.map((car) => (
          <Link key={car.id} href={`cars/${car.id}`}>
            <li
              style={{
                display: 'flex',
                gap: '10px',
                padding: '40px',
                alignItems: 'center',
                backgroundColor: '#f5f5f5',
                color: '#333333',
              }}
            >
              <img
                src={car.image}
                alt={`${car.brand} ${car.model}`}
                width={100}
              />
              <div>
                <p>{car.brand}</p>
                <p>{car.model}</p>
                <p>{car.year}</p>
                <p>{car.pricePerHour} $/час</p>
                <p>{car.location}</p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}
