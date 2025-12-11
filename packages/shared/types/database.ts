export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          name: string
          farm_name: string
          phone: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          name: string
          farm_name: string
          phone?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          name?: string
          farm_name?: string
          phone?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      customers: {
        Row: {
          id: string
          user_id: string
          name: string
          phone: string
          address: string | null
          memo: string | null
          customer_type: 'regular' | 'vip' | 'b2b'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          name: string
          phone: string
          address?: string | null
          memo?: string | null
          customer_type?: 'regular' | 'vip' | 'b2b'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          name?: string
          phone?: string
          address?: string | null
          memo?: string | null
          customer_type?: 'regular' | 'vip' | 'b2b'
          created_at?: string
          updated_at?: string
        }
      }
      products: {
        Row: {
          id: string
          user_id: string
          name: string
          price: number
          unit: string
          category: string | null
          is_seasonal: boolean
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          name: string
          price: number
          unit: string
          category?: string | null
          is_seasonal?: boolean
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          name?: string
          price?: number
          unit?: string
          category?: string | null
          is_seasonal?: boolean
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      orders: {
        Row: {
          id: string
          user_id: string
          customer_id: string
          status: 'pending' | 'preparing' | 'shipping' | 'completed' | 'cancelled'
          total_amount: number
          shipping_address: string
          memo: string | null
          ordered_at: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          customer_id: string
          status?: 'pending' | 'preparing' | 'shipping' | 'completed' | 'cancelled'
          total_amount: number
          shipping_address: string
          memo?: string | null
          ordered_at?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          customer_id?: string
          status?: 'pending' | 'preparing' | 'shipping' | 'completed' | 'cancelled'
          total_amount?: number
          shipping_address?: string
          memo?: string | null
          ordered_at?: string
          created_at?: string
          updated_at?: string
        }
      }
      order_items: {
        Row: {
          id: string
          order_id: string
          product_id: string
          quantity: number
          unit_price: number
          subtotal: number
          created_at: string
        }
        Insert: {
          id?: string
          order_id: string
          product_id: string
          quantity: number
          unit_price: number
          subtotal: number
          created_at?: string
        }
        Update: {
          id?: string
          order_id?: string
          product_id?: string
          quantity?: number
          unit_price?: number
          subtotal?: number
          created_at?: string
        }
      }
      call_logs: {
        Row: {
          id: string
          user_id: string
          customer_id: string | null
          phone: string
          called_at: string
          duration: number | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          customer_id?: string | null
          phone: string
          called_at?: string
          duration?: number | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          customer_id?: string | null
          phone?: string
          called_at?: string
          duration?: number | null
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      customer_type: 'regular' | 'vip' | 'b2b'
      order_status: 'pending' | 'preparing' | 'shipping' | 'completed' | 'cancelled'
    }
  }
}
