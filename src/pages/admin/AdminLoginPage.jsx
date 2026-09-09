import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { LogIn, ShieldCheck } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

export default function AdminLoginPage(){
  const { signIn, isAdmin, loading } = useAuth();
  const navigate = useNavigate();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [busy,setBusy]=useState(false);
  const [error,setError]=useState('');

  if (!loading && isAdmin) return <Navigate to="/admin" replace/>;

  const submit=async(e)=>{
    e.preventDefault();
    setBusy(true);setError('');
    try{await signIn(email.trim(),password);navigate('/admin',{replace:true});}
    catch(err){setError(err?.message||'Unable to sign in.');}
    finally{setBusy(false);}
  };

  return <div className="min-h-screen bg-[#07111f] px-4 py-10 text-white grid place-items-center">
    <div className="w-full max-w-md rounded-3xl border border-white/15 bg-white/[0.07] p-6 shadow-2xl backdrop-blur-3xl sm:p-8">
      <div className="mb-6 flex items-center gap-3"><div className="grid size-11 place-items-center rounded-2xl bg-amber-300/15 text-amber-300"><ShieldCheck size={23}/></div><div><p className="text-xs uppercase tracking-[.2em] text-amber-300">JIC Administration</p><h1 className="text-2xl font-semibold">Admin login</h1></div></div>
      {error&&<div className="mb-4 rounded-xl border border-red-400/20 bg-red-400/10 px-3 py-2 text-sm text-red-100">{error}</div>}
      <form onSubmit={submit} className="space-y-4">
        <label className="block"><span className="mb-1 block text-sm text-white/70">Email</span><input type="email" required autoComplete="email" value={email} onChange={e=>setEmail(e.target.value)} className="w-full rounded-xl border border-white/15 bg-white/[0.06] px-3 py-3 outline-none backdrop-blur-2xl focus:border-amber-300/60"/></label>
        <label className="block"><span className="mb-1 block text-sm text-white/70">Password</span><input type="password" required autoComplete="current-password" value={password} onChange={e=>setPassword(e.target.value)} className="w-full rounded-xl border border-white/15 bg-white/[0.06] px-3 py-3 outline-none backdrop-blur-2xl focus:border-amber-300/60"/></label>
        <button disabled={busy||loading} className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber-300 px-4 py-3 font-semibold text-[#07111f] disabled:opacity-60"><LogIn size={18}/>{busy?'Signing in…':'Sign in'}</button>
      </form>
    </div>
  </div>;
}
