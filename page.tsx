export default function Home(){
  return (<main style={{background:'#070617',minHeight:'100vh',color:'#fff',padding:40}}>
    <header style={{display:'flex',justifyContent:'space-between',alignItems:'center',maxWidth:1200,margin:'0 auto'}}>
      <div style={{display:'flex',alignItems:'center',gap:12}}>
        <img src="/logo.svg" alt="Aura" style={{width:48,height:48}}/>
        <div><h1 style={{margin:0}}>Aura-IDToken</h1><p style={{margin:0,opacity:0.7}}>Digital Trust Layer</p></div>
      </div>
    </header>
    <section style={{maxWidth:1200,margin:'40px auto',display:'flex',gap:24}}>
      <div style={{flex:1}}>
        <h2>Tokenize identity. Secure value.</h2>
        <p style={{color:'#9aa4b2'}}>Aura-IDToken is a developer-first platform for tokenizing identity and digital assets on-chain.</p>
      </div>
      <div style={{width:420,height:280,background:'#0b1020',borderRadius:12,display:'flex',alignItems:'center',justifyContent:'center'}}>
        <svg viewBox="0 0 300 300" style={{width:'80%',height:'80%'}}>
          <defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stopColor="#7D5FFF"/><stop offset="1" stopColor="#00F5D4"/></linearGradient></defs>
          <circle cx="150" cy="150" r="90" stroke="url(#g)" strokeWidth="6" fill="none"/>
          <path d="M110 200 L150 90 L190 200 Z" fill="url(#g)" opacity="0.95"/>
        </svg>
      </div>
    </section>
  </main>)
}
