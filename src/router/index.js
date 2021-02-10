import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/static/Home.vue'
import Auth from '@/views/Auth'
import Login from '@/components/Login'
import Register from '@/components/Register'
import ForgotPassword from '@/components/ForgotPassword'
import About from '@/components/static/About'
import Landing from '@/views/Landing'
import Dashboard from '@/views/Dashboard'
import Settings from '@/components/Settings'
import DashboardHome from '@/components/DashboardHome'
import Profile from '@/components/Profile'
import Leaderboard from '@/components/Leaderboard'
import Achievements from '@/components/Achievements'
import Editing from '@/views/Editing'
import EditWord from '@/components/EditWord'
import EditName from '@/components/EditName'
import EditTranslation from '@/components/EditTranslation'
import VerifyWord from '@/components/VerifyWord'
import VerifyName from '@/components/VerifyName'
import VerifySound from '@/components/VerifySound'
import VerifyTranslation from '@/components/VerifyTranslation'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Landing,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/about',
        name: 'About',
        component: About
      }
    ]
  },
  {
    path: '/auth',
    component: Auth,
    children: [
      {
        // Default route
        path: '/',
        redirect: '/auth/login'
      },
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: 'login',
        component: Login
      },
      {
        // UserPosts will be rendered inside User's <router-view>
        // when /user/:id/posts is matched
        path: 'register',
        component: Register
      },
      {
        // UserPosts will be rendered inside User's <router-view>
        // when /user/:id/posts is matched
        path: 'reset',
        component: ForgotPassword
      }
    ]
  },
  {
    path: '/u',
    component: Dashboard,
    children: [
      {
        // Default route
        path: '/',
        redirect: '/u/d'
      },
      {
        path: 'd',
        component: DashboardHome
      },
      {
        path: 'settings',
        component: Settings
      },
      {
        path: 'profile',
        component: Profile
      },
      {
        path: 'achievements',
        component: Achievements
      }
    ]
  },
  {
    path: '/leaderboard',
    component: Leaderboard
  },
  {
    path: '/edit',
    component: Editing,
    children: [
      {
        // Default route
        path: '/',
        redirect: '/u/d'
      },
      {
        path: 'word',
        component: EditWord
      },
      {
        path: 'name',
        component: EditName
      },
      {
        path: 'translation',
        component: EditTranslation
      }
    ]
  },
  {
    path: '/verify',
    component: Editing,
    children: [
      {
        // Default route
        path: '/',
        redirect: '/u/d'
      },
      {
        path: 'word',
        component: VerifyWord
      },
      {
        path: 'name',
        component: VerifyName
      },
      {
        path: 'translation',
        component: VerifyTranslation
      },
      {
        path: 'sound',
        component: VerifySound
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
