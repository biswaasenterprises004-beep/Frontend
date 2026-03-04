"use client"

import { EventDashboard } from "@/components/event-dashboard"
import { useAuth } from "@/hooks/useAuth"

export default function EventPage() {

  useAuth()
  return <EventDashboard />
}

