import Link from 'next/link';

const products = [
  {
    slug: 'wpmcp',
    badge: 'WordPress Plugin',
    name: 'WP-MCP',
    tagline: 'Connect Claude & Codex to WordPress',
    description: 'Manage content, SEO, WooCommerce, users and more using plain English. No coding required. Just describe what you want — WP-MCP handles the rest.',
    features: ['AI-powered content', 'SEO automation', 'WooCommerce control', 'User management'],
    cta: 'Learn More',
    docs: '/wpmcp/docs',
    color: '#FF5C00',
    status: 'Live',
    number: '01',
  },
];

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', background: '#f7f7f4', overflowX: 'hidden' }}>

      {/* Navbar */}
      <nav style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 60px',
        height: '68px',
        borderBottom: '1px solid rgba(0,0,0,0.08)',
        background: 'rgba(247,247,244,0.9)',
        backdropFilter: 'blur(12px)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}>
        <a href="https://techinsol.io" style={{ textDecoration: 'none' }}>
          <span style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '20px', letterSpacing: '-0.02em' }}>
            <span style={{ color: '#000' }}>Techin</span><span style={{ color: '#FF5C00' }}>Sol</span>
            <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '13px', color: '#999', marginLeft: '8px' }}>Tools</span>
          </span>
        </a>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <a href="https://techinsol.io" style={{
            fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#666',
            textDecoration: 'none', padding: '8px 16px', borderRadius: '8px',
            transition: 'background 0.2s',
          }}>Website</a>
          <a href="https://github.com/techinsol" style={{
            fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#fff',
            textDecoration: 'none', padding: '8px 16px', borderRadius: '8px',
            background: '#000', fontWeight: 500,
          }}>GitHub →</a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ position: 'relative', padding: '120px 60px 80px', maxWidth: '1100px', margin: '0 auto' }}>

        {/* Background decoration */}
        <div style={{
          position: 'absolute', top: '60px', right: '0',
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(255,92,0,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: '#fff', border: '1px solid rgba(255,92,0,0.2)',
            borderRadius: '100px', padding: '6px 14px 6px 8px',
            marginBottom: '40px',
          }}>
            <span style={{
              background: '#FF5C00', color: '#fff', borderRadius: '100px',
              padding: '2px 10px', fontSize: '10px', fontFamily: 'Sora, sans-serif',
              fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase',
            }}>New</span>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#666' }}>
              WP-MCP v1.9.5 — now with AI Magic Tools
            </span>
          </div>

          <h1 style={{
            fontFamily: 'Sora, sans-serif',
            fontSize: 'clamp(48px, 7vw, 88px)',
            fontWeight: 800,
            lineHeight: 1.0,
            letterSpacing: '-0.04em',
            marginBottom: '28px',
            maxWidth: '800px',
          }}>
            Build smarter.<br />
            Ship <span style={{ color: '#FF5C00', fontStyle: 'italic' }}>faster.</span>
          </h1>

          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#555',
            lineHeight: 1.7, maxWidth: '480px', marginBottom: '48px',
          }}>
            Plugins, themes and AI automations built by TechinSol — engineered to eliminate repetitive work.
          </p>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
            <a href="#products" style={{
              background: '#FF5C00', color: '#fff', padding: '14px 28px',
              borderRadius: '10px', fontSize: '15px', fontFamily: 'Inter, sans-serif',
              fontWeight: 600, textDecoration: 'none', letterSpacing: '-0.01em',
            }}>
              Explore Tools →
            </a>
            <a href="https://techinsol.io" style={{
              color: '#000', padding: '14px 28px', borderRadius: '10px',
              fontSize: '15px', fontFamily: 'Inter, sans-serif', fontWeight: 500,
              textDecoration: 'none', border: '1px solid rgba(0,0,0,0.12)',
            }}>
              About TechinSol
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div style={{
          display: 'flex', gap: '0', marginTop: '80px',
          background: '#fff', borderRadius: '16px',
          border: '1px solid rgba(0,0,0,0.08)',
          overflow: 'hidden',
        }}>
          {[
            { value: '1', label: 'Products Live' },
            { value: '50+', label: 'WordPress Tools' },
            { value: 'Free', label: 'To Get Started' },
            { value: '24/7', label: 'AI Powered' },
          ].map((stat, i) => (
            <div key={i} style={{
              flex: 1, padding: '28px 32px',
              borderRight: i < 3 ? '1px solid rgba(0,0,0,0.08)' : 'none',
            }}>
              <div style={{
                fontFamily: 'Sora, sans-serif', fontSize: '32px',
                fontWeight: 800, letterSpacing: '-0.03em', color: '#000',
                marginBottom: '4px',
              }}>{stat.value}</div>
              <div style={{
                fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#999',
              }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section id="products" style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 60px 120px' }}>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '48px' }}>
          <div>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 600,
              letterSpacing: '0.1em', textTransform: 'uppercase', color: '#FF5C00',
              marginBottom: '8px',
            }}>Our Products</p>
            <h2 style={{
              fontFamily: 'Sora, sans-serif', fontSize: '36px', fontWeight: 700,
              letterSpacing: '-0.03em', color: '#000',
            }}>Everything we've built</h2>
          </div>
        </div>

        {/* Product Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {products.map((p) => (
            <div key={p.slug} style={{
              background: '#fff', border: '1px solid rgba(0,0,0,0.08)',
              borderRadius: '20px', overflow: 'hidden',
              display: 'grid', gridTemplateColumns: '1fr 1fr',
            }}>
              {/* Left */}
              <div style={{ padding: '48px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                  <span style={{
                    fontFamily: 'Sora, sans-serif', fontSize: '11px', fontWeight: 700,
                    letterSpacing: '0.1em', textTransform: 'uppercase', color: '#999',
                  }}>{p.badge}</span>
                  <span style={{
                    background: '#e8f5e9', color: '#2e7d32', fontSize: '11px',
                    fontFamily: 'Inter, sans-serif', fontWeight: 600,
                    padding: '3px 10px', borderRadius: '100px',
                  }}>{p.status}</span>
                </div>

                <div style={{
                  fontFamily: 'Sora, sans-serif', fontSize: '11px', fontWeight: 700,
                  color: '#ccc', letterSpacing: '0.05em', marginBottom: '8px',
                }}>{p.number}</div>

                <h3 style={{
                  fontFamily: 'Sora, sans-serif', fontSize: '48px', fontWeight: 800,
                  letterSpacing: '-0.04em', lineHeight: 1, marginBottom: '12px',
                }}>{p.name}</h3>

                <p style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '15px',
                  fontWeight: 600, color: p.color, marginBottom: '16px',
                }}>{p.tagline}</p>

                <p style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '14px',
                  color: '#666', lineHeight: 1.7, marginBottom: '32px',
                }}>{p.description}</p>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <Link href={`/${p.slug}`} style={{
                    background: '#FF5C00', color: '#fff', padding: '12px 24px',
                    borderRadius: '10px', fontSize: '14px', fontFamily: 'Inter, sans-serif',
                    fontWeight: 600, textDecoration: 'none',
                  }}>
                    {p.cta} →
                  </Link>
                  <a href={p.docs} style={{
                    color: '#000', padding: '12px 24px', borderRadius: '10px',
                    fontSize: '14px', fontFamily: 'Inter, sans-serif', fontWeight: 500,
                    textDecoration: 'none', border: '1px solid rgba(0,0,0,0.12)',
                  }}>
                    Documentation
                  </a>
                </div>
              </div>

              {/* Right - Feature list */}
              <div style={{
                background: '#f7f7f4', borderLeft: '1px solid rgba(0,0,0,0.06)',
                padding: '48px', display: 'flex', flexDirection: 'column', justifyContent: 'center',
              }}>
                <p style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 600,
                  letterSpacing: '0.08em', textTransform: 'uppercase', color: '#999',
                  marginBottom: '24px',
                }}>What it does</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {p.features.map((f, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                      <div style={{
                        width: '28px', height: '28px', borderRadius: '8px',
                        background: '#FF5C00', display: 'flex', alignItems: 'center',
                        justifyContent: 'center', flexShrink: 0,
                      }}>
                        <span style={{ color: '#fff', fontSize: '13px' }}>✓</span>
                      </div>
                      <span style={{
                        fontFamily: 'Inter, sans-serif', fontSize: '15px',
                        fontWeight: 500, color: '#000',
                      }}>{f}</span>
                    </div>
                  ))}
                </div>

                <div style={{
                  marginTop: '36px', padding: '20px', background: '#fff',
                  borderRadius: '12px', border: '1px solid rgba(0,0,0,0.08)',
                }}>
                  <p style={{
                    fontFamily: 'Inter, sans-serif', fontSize: '13px',
                    color: '#999', marginBottom: '4px',
                  }}>Works with</p>
                  <p style={{
                    fontFamily: 'Sora, sans-serif', fontSize: '15px',
                    fontWeight: 600, color: '#000',
                  }}>Claude AI · OpenAI Codex · WordPress</p>
                </div>
              </div>
            </div>
          ))}

          {/* Coming Soon */}
          <div style={{
            border: '1px dashed rgba(0,0,0,0.15)', borderRadius: '20px',
            padding: '60px', display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: '16px',
            background: 'transparent', textAlign: 'center',
          }}>
            <div style={{
              width: '48px', height: '48px', borderRadius: '12px',
              border: '2px dashed rgba(0,0,0,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '24px', color: '#ccc',
            }}>+</div>
            <div>
              <p style={{
                fontFamily: 'Sora, sans-serif', fontSize: '18px',
                fontWeight: 700, color: '#000', marginBottom: '6px',
              }}>More tools coming soon</p>
              <p style={{
                fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#999',
              }}>Shopify themes, automation tools and more</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{
        maxWidth: '1100px', margin: '0 auto 120px', padding: '0 60px',
      }}>
        <div style={{
          background: '#000', borderRadius: '24px', padding: '72px 80px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: '40px', position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', right: '-60px', top: '-60px',
            width: '400px', height: '400px',
            background: 'radial-gradient(circle, rgba(255,92,0,0.15) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{
              fontFamily: 'Sora, sans-serif', fontSize: '40px', fontWeight: 800,
              letterSpacing: '-0.03em', color: '#fff', marginBottom: '12px', lineHeight: 1.1,
            }}>
              Ready to automate<br />your WordPress?
            </h2>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: '16px', color: 'rgba(255,255,255,0.5)',
            }}>
              Get started with WP-MCP in minutes. Free to install.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexShrink: 0, position: 'relative', zIndex: 1 }}>
            <Link href="/wpmcp" style={{
              background: '#FF5C00', color: '#fff', padding: '14px 28px',
              borderRadius: '10px', fontSize: '15px', fontFamily: 'Inter, sans-serif',
              fontWeight: 600, textDecoration: 'none',
            }}>
              Get WP-MCP →
            </Link>
            <a href="/wpmcp/docs" style={{
              background: 'rgba(255,255,255,0.1)', color: '#fff', padding: '14px 28px',
              borderRadius: '10px', fontSize: '15px', fontFamily: 'Inter, sans-serif',
              fontWeight: 500, textDecoration: 'none',
            }}>
              Read Docs
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#0a0a0a', padding: '60px',
      }}>
        <div style={{
          maxWidth: '1100px', margin: '0 auto',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          paddingBottom: '40px', borderBottom: '1px solid rgba(255,255,255,0.08)',
          marginBottom: '32px',
        }}>
          <span style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '20px' }}>
            <span style={{ color: '#fff' }}>Techin</span><span style={{ color: '#FF5C00' }}>Sol</span>
          </span>
          <div style={{ display: 'flex', gap: '32px' }}>
            {[
              { label: 'Website', href: 'https://techinsol.io' },
              { label: 'GitHub', href: 'https://github.com/techinsol' },
              { label: 'WP-MCP', href: '/wpmcp' },
              { label: 'Docs', href: '/wpmcp/docs' },
            ].map((l) => (
              <a key={l.label} href={l.href} style={{
                fontFamily: 'Inter, sans-serif', fontSize: '13px',
                color: '#555', textDecoration: 'none',
              }}>{l.label}</a>
            ))}
          </div>
        </div>
        <div style={{
          maxWidth: '1100px', margin: '0 auto',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#444' }}>
            © {new Date().getFullYear()} TechinSol. All rights reserved.
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#444' }}>
            
          </p>
        </div>
      </footer>

    </div>
  );
}
