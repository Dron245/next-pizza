"use client";

import { useRouter } from "next/navigation";

export default function ModalPage({ params }: { params: { id: string } }) {
  const router = useRouter();

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2>Модальное окно #{params.id}</h2>
        <button onClick={() => router.back()} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          ❌ Закрыть
        </button>
      </div>
    </div>
  );
}
