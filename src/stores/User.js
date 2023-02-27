import { writable } from 'svelte/store'
export const AuthUser = writable(localStorage.user ? JSON.parse(localStorage.user) : null)
