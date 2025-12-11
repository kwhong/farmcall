/**
 * 전화번호 포맷팅
 * @example formatPhoneNumber('01012345678') => '010-1234-5678'
 */
export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '')
  
  if (cleaned.length === 11) {
    return cleaned.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')
  } else if (cleaned.length === 10) {
    return cleaned.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')
  }
  
  return phone
}

/**
 * 가격 포맷팅 (원화)
 * @example formatCurrency(10000) => '10,000원'
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('ko-KR').format(amount) + '원'
}

/**
 * 날짜 포맷팅
 * @example formatDate('2025-01-15') => '2025년 1월 15일'
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

/**
 * 상대적 시간 표시
 * @example formatRelativeTime('2025-01-15T10:00:00') => '3시간 전'
 */
export function formatRelativeTime(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffMins = Math.floor(diffMs / (1000 * 60))
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

  if (diffMins < 1) return '방금 전'
  if (diffMins < 60) return `${diffMins}분 전`
  if (diffHours < 24) return `${diffHours}시간 전`
  if (diffDays < 7) return `${diffDays}일 전`
  
  return formatDate(dateString)
}

/**
 * 주문 상태 한글 변환
 */
export function formatOrderStatus(status: string): string {
  const statusMap: Record<string, string> = {
    pending: '주문접수',
    preparing: '준비중',
    shipping: '배송중',
    completed: '배송완료',
    cancelled: '취소됨',
  }
  return statusMap[status] || status
}

/**
 * 고객 유형 한글 변환
 */
export function formatCustomerType(type: string): string {
  const typeMap: Record<string, string> = {
    regular: '일반',
    vip: 'VIP',
    b2b: 'B2B',
  }
  return typeMap[type] || type
}
