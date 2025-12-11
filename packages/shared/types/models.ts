import type { Database } from './database'

// Table Row Types
export type User = Database['public']['Tables']['users']['Row']
export type Customer = Database['public']['Tables']['customers']['Row']
export type Product = Database['public']['Tables']['products']['Row']
export type Order = Database['public']['Tables']['orders']['Row']
export type OrderItem = Database['public']['Tables']['order_items']['Row']
export type CallLog = Database['public']['Tables']['call_logs']['Row']

// Insert Types
export type UserInsert = Database['public']['Tables']['users']['Insert']
export type CustomerInsert = Database['public']['Tables']['customers']['Insert']
export type ProductInsert = Database['public']['Tables']['products']['Insert']
export type OrderInsert = Database['public']['Tables']['orders']['Insert']
export type OrderItemInsert = Database['public']['Tables']['order_items']['Insert']
export type CallLogInsert = Database['public']['Tables']['call_logs']['Insert']

// Update Types
export type UserUpdate = Database['public']['Tables']['users']['Update']
export type CustomerUpdate = Database['public']['Tables']['customers']['Update']
export type ProductUpdate = Database['public']['Tables']['products']['Update']
export type OrderUpdate = Database['public']['Tables']['orders']['Update']
export type OrderItemUpdate = Database['public']['Tables']['order_items']['Update']
export type CallLogUpdate = Database['public']['Tables']['call_logs']['Update']

// Enum Types
export type CustomerType = Database['public']['Enums']['customer_type']
export type OrderStatus = Database['public']['Enums']['order_status']

// Extended Types (with relations)
export interface OrderWithItems extends Order {
  items: OrderItem[]
  customer: Customer
}

export interface CustomerWithStats extends Customer {
  total_orders: number
  total_amount: number
  last_order_date: string | null
}

export interface CallLogWithCustomer extends CallLog {
  customer: Customer | null
}
