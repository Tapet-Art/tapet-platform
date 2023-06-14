import { DashboardConfig } from "types"

export const dashboardConfig: DashboardConfig = {
  mainNav: [

  ],
  sidebarNav: [
    {
      title: "Home",
      href: "/dashboard",
      icon: "chevronRight",
    },
    {
      title: "Resumes",
      href: "/dashboard/resumes",
      icon: "post",
    },
    {
      title: "Job Descriptions",
      href: "/dashboard/descriptions",
      icon: "post",
    },
    {
      title: "Practice Interviews",
      href: "/liftoff",
      icon: "media",
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: "settings",
    },
  ],
}
