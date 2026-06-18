import Link from 'next/link';

const features = [
  { icon: '✦', title: 'AI Content Creation', desc: 'Write, edit and publish posts, pages and custom content using plain English prompts.' },
  { icon: '◈', title: 'SEO Automation', desc: 'Generate meta titles, descriptions, schema markup and keyword suggestions automatically.' },
  { icon: '⬡', title: 'WooCommerce Control', desc: 'Manage products, orders, inventory and customers without touching the dashboard.' },
  { icon: '◎', title: 'Media Management', desc: 'Upload, organize and optimize images and files directly through AI commands.' },
  { icon: '⊕', title: 'User & Role Management', desc: 'Create users, assign roles and manage permissions with simple instructions.' },
  { icon: '◉', title: 'Site Health & Security', desc: 'Run audits, inspect logs, check performance and fix issues on demand.' },
];

const faqs = [
  { q: 'What is WP-MCP?', a: 'WP-MCP is a WordPress plugin that connects AI assistants like Claude and Codex directly to your site via the Model Context Protocol (MCP).' },
  { q: 'Do I need coding skills?', a: 'No. You just describe what you want in plain English and WP-MCP handles everything on your WordPress site.' },
  { q: 'Which AI assistants are supported?', a: 'WP-MCP works with Claude (Anthropic) and OpenAI Codex. More integrations are coming soon.' },
  { q: 'Is it free to use?', a: 'The core plugin is free to install. Pricing plans for advanced features are coming soon.' },
  { q: 'Is it safe to give AI access to my site?', a: 'Yes. WP-MCP uses a permission system so you control exactly what the AI can and cannot do on your site.' },
];

export default function WPMCPPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#f7f7f4', overflowX: 'hidden' }}>

      {/* Navbar */}
      <nav style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 60px', height: '68px',
        borderBottom: '1px solid rgba(0,0,0,0.08)',
        background: 'rgba(247,247,244,0.9)', backdropFilter: 'blur(12px)',
        position: 'sticky', top: 0, zIndex: 100,
      }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <span style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '20px', letterSpacing: '-0.02em' }}>
            <span style={{ color: '#000' }}>Techin</span><span style={{ color: '#FF5C00' }}>Sol</span>
            <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '13px', color: '#999', marginLeft: '8px' }}>Tools</span>
          </span>
        </Link>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <Link href="/" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#666', textDecoration: 'none', padding: '8px 16px' }}>← All Tools</Link>
          <a href="/wpmcp/docs" style={{
            fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#fff',
            textDecoration: 'none', padding: '8px 16px', borderRadius: '8px',
            background: '#FF5C00', fontWeight: 500,
          }}>Documentation →</a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '100px 60px 80px', position: 'relative' }}>
        <div style={{
          position: 'absolute', top: 0, right: 0,
          width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(255,92,0,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '720px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '32px' }}>
            <span style={{
              background: '#e8f5e9', color: '#2e7d32', fontSize: '11px',
              fontFamily: 'Inter, sans-serif', fontWeight: 600,
              padding: '4px 12px', borderRadius: '100px',
            }}>● Live — v1.9.5</span>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#999' }}>WordPress Plugin</span>
          </div>

          <h1 style={{
            fontFamily: 'Sora, sans-serif',
            fontSize: 'clamp(44px, 6vw, 80px)',
            fontWeight: 800, lineHeight: 1.0,
            letterSpacing: '-0.04em', marginBottom: '24px',
          }}>
            Your WordPress site,<br />
            <span style={{ color: '#FF5C00', fontStyle: 'italic' }}>controlled by AI.</span>
          </h1>

          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: '18px',
            color: '#555', lineHeight: 1.7, marginBottom: '40px', maxWidth: '520px',
          }}>
            WP-MCP connects Claude and Codex directly to your WordPress site. Manage content, SEO, WooCommerce and more — just by talking to your AI assistant.
          </p>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href="/wpmcp/docs" style={{
              background: '#FF5C00', color: '#fff', padding: '14px 28px',
              borderRadius: '10px', fontSize: '15px', fontFamily: 'Inter, sans-serif',
              fontWeight: 600, textDecoration: 'none',
            }}>Get Started Free →</a>
            <a href="/wpmcp/docs" style={{
              color: '#000', padding: '14px 28px', borderRadius: '10px',
              fontSize: '15px', fontFamily: 'Inter, sans-serif', fontWeight: 500,
              textDecoration: 'none', border: '1px solid rgba(0,0,0,0.12)',
            }}>Read the Docs</a>
          </div>

          {/* Works with */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '48px' }}>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#aaa', fontWeight: 500 }}>WORKS WITH</span>
            {['Claude AI', 'OpenAI Codex', 'WordPress 6+'].map((t) => (
              <span key={t} style={{
                fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 600,
                color: '#555', background: '#fff', padding: '4px 12px',
                borderRadius: '100px', border: '1px solid rgba(0,0,0,0.1)',
              }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 60px 100px' }}>
        <div style={{ marginBottom: '48px' }}>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 600,
            letterSpacing: '0.1em', textTransform: 'uppercase', color: '#FF5C00', marginBottom: '8px',
          }}>Features</p>
          <h2 style={{
            fontFamily: 'Sora, sans-serif', fontSize: '36px', fontWeight: 700,
            letterSpacing: '-0.03em',
          }}>Everything you can do</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {features.map((f, i) => (
            <div key={i} style={{
              background: '#fff', border: '1px solid rgba(0,0,0,0.08)',
              borderRadius: '16px', padding: '32px',
            }}>
              <div style={{
                width: '40px', height: '40px', borderRadius: '10px',
                background: '#fff5f0', display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: '18px', color: '#FF5C00',
                marginBottom: '16px',
              }}>{f.icon}</div>
              <h3 style={{
                fontFamily: 'Sora, sans-serif', fontSize: '16px',
                fontWeight: 700, marginBottom: '8px', letterSpacing: '-0.01em',
              }}>{f.title}</h3>
              <p style={{
                fontFamily: 'Inter, sans-serif', fontSize: '14px',
                color: '#666', lineHeight: 1.6,
              }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tutorial Videos */}
      <section style={{ background: '#fff', padding: '100px 60px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ marginBottom: '48px' }}>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 600,
              letterSpacing: '0.1em', textTransform: 'uppercase', color: '#FF5C00', marginBottom: '8px',
            }}>Tutorials</p>
            <h2 style={{
              fontFamily: 'Sora, sans-serif', fontSize: '36px', fontWeight: 700,
              letterSpacing: '-0.03em',
            }}>See it in action</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            {[
              { title: 'Getting Started', desc: 'Install WP-MCP and connect Claude in 5 minutes' },
              { title: 'Content Automation', desc: 'Write and publish blog posts using AI prompts' },
              { title: 'WooCommerce with AI', desc: 'Manage your store without touching the dashboard' },
            ].map((v, i) => (
              <div key={i} style={{
                background: '#f7f7f4', border: '1px solid rgba(0,0,0,0.08)',
                borderRadius: '16px', overflow: 'hidden',
              }}>
                <div style={{
                  height: '200px', background: '#000',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  position: 'relative',
                }}>
                  <div style={{
                    width: '56px', height: '56px', borderRadius: '50%',
                    background: 'rgba(255,92,0,0.9)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <span style={{ color: '#fff', fontSize: '20px', marginLeft: '4px' }}>▶</span>
                  </div>
                  <div style={{
                    position: 'absolute', top: '12px', left: '12px',
                    background: 'rgba(255,255,255,0.1)', borderRadius: '6px',
                    padding: '4px 10px',
                  }}>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#fff', fontWeight: 500 }}>
                      Coming Soon
                    </span>
                  </div>
                </div>
                <div style={{ padding: '20px' }}>
                  <h4 style={{
                    fontFamily: 'Sora, sans-serif', fontSize: '15px',
                    fontWeight: 700, marginBottom: '6px',
                  }}>{v.title}</h4>
                  <p style={{
                    fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#666',
                  }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '100px 60px' }}>
        <div style={{ marginBottom: '48px' }}>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 600,
            letterSpacing: '0.1em', textTransform: 'uppercase', color: '#FF5C00', marginBottom: '8px',
          }}>Pricing</p>
          <h2 style={{
            fontFamily: 'Sora, sans-serif', fontSize: '36px', fontWeight: 700,
            letterSpacing: '-0.03em',
          }}>Simple, honest pricing</h2>
        </div>

        <div style={{
          background: '#fff', border: '1px solid rgba(0,0,0,0.08)',
          borderRadius: '20px', padding: '80px',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          textAlign: 'center', gap: '16px',
        }}>
          <div style={{
            width: '56px', height: '56px', borderRadius: '14px',
            background: '#fff5f0', display: 'flex', alignItems: 'center',
            justifyContent: 'center', fontSize: '24px',
          }}>⏳</div>
          <h3 style={{
            fontFamily: 'Sora, sans-serif', fontSize: '24px',
            fontWeight: 700, letterSpacing: '-0.02em',
          }}>Pricing coming soon</h3>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: '15px',
            color: '#666', maxWidth: '400px', lineHeight: 1.6,
          }}>
            We're finalizing our pricing plans. The core plugin will always have a free tier. Stay tuned.
          </p>
          <div style={{
            marginTop: '8px', background: '#f7f7f4', border: '1px solid rgba(0,0,0,0.08)',
            borderRadius: '10px', padding: '12px 24px',
          }}>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#555', fontWeight: 500 }}>
              🎉 Free to install and use right now
            </span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#fff', padding: '100px 60px' }}>
        <div style={{ maxWidth: '740px', margin: '0 auto' }}>
          <div style={{ marginBottom: '48px' }}>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 600,
              letterSpacing: '0.1em', textTransform: 'uppercase', color: '#FF5C00', marginBottom: '8px',
            }}>FAQ</p>
            <h2 style={{
              fontFamily: 'Sora, sans-serif', fontSize: '36px', fontWeight: 700,
              letterSpacing: '-0.03em',
            }}>Common questions</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {faqs.map((f, i) => (
              <div key={i} style={{
                padding: '28px 0',
                borderBottom: '1px solid rgba(0,0,0,0.08)',
              }}>
                <h4 style={{
                  fontFamily: 'Sora, sans-serif', fontSize: '17px',
                  fontWeight: 700, marginBottom: '10px', letterSpacing: '-0.01em',
                }}>{f.q}</h4>
                <p style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '14px',
                  color: '#666', lineHeight: 1.7,
                }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '100px 60px' }}>
        <div style={{
          background: '#000', borderRadius: '24px', padding: '80px',
          textAlign: 'center', position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '600px', height: '600px',
            background: 'radial-gradient(circle, rgba(255,92,0,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{
              fontFamily: 'Sora, sans-serif', fontSize: '48px', fontWeight: 800,
              letterSpacing: '-0.04em', color: '#fff', marginBottom: '16px', lineHeight: 1.05,
            }}>
              Start automating your<br />WordPress today.
            </h2>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: '16px',
              color: 'rgba(255,255,255,0.5)', marginBottom: '40px',
            }}>
              Free to install. No coding required.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
              <a href="/wpmcp/docs" style={{
                background: '#FF5C00', color: '#fff', padding: '14px 32px',
                borderRadius: '10px', fontSize: '15px', fontFamily: 'Inter, sans-serif',
                fontWeight: 600, textDecoration: 'none',
              }}>Get Started Free →</a>
              <a href="/wpmcp/docs" style={{
                background: 'rgba(255,255,255,0.1)', color: '#fff', padding: '14px 32px',
                borderRadius: '10px', fontSize: '15px', fontFamily: 'Inter, sans-serif',
                fontWeight: 500, textDecoration: 'none',
              }}>Read the Docs</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#0a0a0a', padding: '60px' }}>
        <div style={{
          maxWidth: '1100px', margin: '0 auto',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          paddingBottom: '40px', borderBottom: '1px solid rgba(255,255,255,0.08)',
          marginBottom: '32px',
        }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <span style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '20px' }}>
              <span style={{ color: '#fff' }}>Techin</span><span style={{ color: '#FF5C00' }}>Sol</span>
            </span>
          </Link>
          <div style={{ display: 'flex', gap: '32px' }}>
            {[
              { label: 'All Tools', href: '/' },
              { label: 'Documentation', href: '/wpmcp/docs' },
              { label: 'GitHub', href: 'https://github.com/techinsol' },
              { label: 'Website', href: 'https://techinsol.io' },
            ].map((l) => (
              <a key={l.label} href={l.href} style={{
                fontFamily: 'Inter, sans-serif', fontSize: '13px',
                color: '#555', textDecoration: 'none',
              }}>{l.label}</a>
            ))}
          </div>
        </div>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#444' }}>
            © {new Date().getFullYear()} TechinSol. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
