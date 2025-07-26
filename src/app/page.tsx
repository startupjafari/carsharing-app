import Link from 'next/link';

export default function HomePage() {
  return (
    <header>
      <nav>
        <Link href="/">Главная</Link>
        <Link href="/cars">Автомобили</Link>
        <Link href="/profile">Профиль</Link>
        <Link href="/auth/register">Регистрация</Link>
        <Link href="/auth/login">Войти</Link>
      </nav>
    </header>
  );
}
