'use client'
import React, {useEffect, useState} from 'react'
import dynamic from 'next/dynamic'
const TonConnectButton = dynamic(()=>import('@tonconnect/ui-react').then(m=>m.TonConnectButton), {ssr:false})

export default function WalletIntegration(){
  const [address, setAddress] = useState<string|null>(null)
  useEffect(()=>{ /* TonConnect UI handles sessions via its button */ },[])
  return (
    <div style={{padding:16,background:'#0b1020',borderRadius:8}}>
      <h3 style={{margin:0}}>Connect TON Wallet</h3>
      <p style={{margin:'6px 0 12px 0',color:'#9aa4b2'}}>Use TonConnect to interact with Aura-IDToken</p>
      <div style={{display:'flex',gap:8,alignItems:'center'}}>
        <TonConnectButton/>
        <div style={{marginLeft:'auto'}}>
          {address ? <code>{address}</code> : <span style={{color:'#9aa4b2'}}>Not connected</span>}
        </div>
      </div>
    </div>
  )
}
