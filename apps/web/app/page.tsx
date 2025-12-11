import Link from 'next/link'
import { Phone, Users, Package, BarChart3 } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary-600">FarmCall</h1>
          <Link 
            href="/login"
            className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition"
          >
            로그인
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          전화가 오면,<br />고객 정보가 바로 보입니다
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          농산물 판매 농장을 위한 스마트 전화 주문 관리 시스템
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/register"
            className="px-8 py-3 bg-primary-600 text-white rounded-lg text-lg font-semibold hover:bg-primary-700 transition"
          >
            무료로 시작하기
          </Link>
          <Link
            href="/demo"
            className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg text-lg font-semibold hover:bg-gray-50 transition"
          >
            데모 보기
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">주요 기능</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Phone className="w-8 h-8" />}
            title="실시간 전화 알림"
            description="전화가 오면 웹 화면에 즉시 팝업으로 고객 정보 표시"
          />
          <FeatureCard
            icon={<Users className="w-8 h-8" />}
            title="고객 관리"
            description="고객 정보, 주문 이력, VIP 분류 등 체계적인 CRM"
          />
          <FeatureCard
            icon={<Package className="w-8 h-8" />}
            title="주문 관리"
            description="주문 등록, 상태 관리, 재주문까지 한 번에"
          />
          <FeatureCard
            icon={<BarChart3 className="w-8 h-8" />}
            title="통계 분석"
            description="매출 현황, 단골 분석, 상품별 통계"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2025 FarmCall. Made with love for farmers</p>
        </div>
      </footer>
    </main>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
      <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h4 className="text-lg font-semibold text-gray-900 mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
