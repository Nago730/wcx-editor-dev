// be/db/codebase.ts
export const codebase = {
    html: `
  <div data-anch="root" data-type="Page" style="font-family:Inter,system-ui,sans-serif;color:#111;">
    <!-- Header -->
    <section data-anch="header" data-type="Section" style="position:sticky;top:0;background:#fff;border-bottom:1px solid #eee;z-index:5;">
      <div style="max-width:1100px;margin:0 auto;padding:14px 20px;display:flex;align-items:center;justify-content:space-between;">
        <h1 data-anch="header.logo" data-type="Text" style="margin:0;font-size:18px;font-weight:700;letter-spacing:.2px;">WebCreatorX</h1>
        <nav style="display:flex;gap:16px;align-items:center;">
          <p data-anch="header.nav.features" data-type="Text" style="margin:0;color:#555;cursor:pointer;">Features</p>
          <p data-anch="header.nav.templates" data-type="Text" style="margin:0;color:#555;cursor:pointer;">Templates</p>
          <p data-anch="header.nav.pricing" data-type="Text" style="margin:0;color:#555;cursor:pointer;">Pricing</p>
          <button data-anch="header.cta" data-type="Button" style="padding:8px 12px;border:1px solid #ddd;border-radius:8px;background:#111;color:#fff;cursor:pointer;">Get Started</button>
        </nav>
      </div>
    </section>
  
    <!-- Hero -->
    <section data-anch="hero" data-type="Section" style="background:linear-gradient(180deg,#fafafa,#fff);">
      <div style="max-width:1100px;margin:0 auto;padding:60px 20px;display:grid;grid-template-columns:1.1fr .9fr;gap:28px;align-items:center;">
        <div>
          <h2 data-anch="hero.title" data-type="Text" style="margin:0 0 10px 0;font-size:44px;line-height:1.15;font-weight:800;">Build beautiful sites, visually</h2>
          <p data-anch="hero.subtitle" data-type="Text" style="margin:0 0 20px 0;color:#444;font-size:18px;line-height:1.6;">
            Drag, drop, and fine-tune with pixel-perfect controls backed by a robust graph model.
          </p>
          <div style="display:flex;gap:10px;align-items:center;">
            <button data-anch="hero.cta.primary" data-type="Button" style="padding:12px 16px;border:1px solid #111;border-radius:10px;background:#111;color:#fff;cursor:pointer;">
              Start for free
            </button>
            <button data-anch="hero.cta.secondary" data-type="Button" style="padding:12px 16px;border:1px solid #ddd;border-radius:10px;background:#fff;color:#111;cursor:pointer;">
              View templates
            </button>
          </div>
        </div>
        <div style="border:1px solid #eee;border-radius:12px;overflow:hidden;box-shadow:0 6px 18px rgba(0,0,0,.06);background:#fff;">
          <!-- Mock preview panel -->
          <div style="height:260px;display:grid;grid-template-columns:1fr 1fr;gap:10px;padding:14px;background:#fafafa;">
            <div style="background:#fff;border:1px solid #eee;border-radius:10px;"></div>
            <div style="background:#fff;border:1px solid #eee;border-radius:10px;"></div>
            <div style="background:#fff;border:1px solid #eee;border-radius:10px;"></div>
            <div style="background:#fff;border:1px solid #eee;border-radius:10px;"></div>
          </div>
        </div>
      </div>
    </section>
  
    <!-- Features Grid -->
    <section data-anch="features" data-type="Section" style="background:#fff;">
      <div style="max-width:1100px;margin:0 auto;padding:48px 20px;">
        <h3 data-anch="features.heading" data-type="Text" style="margin:0 0 20px 0;font-size:28px;font-weight:800;">Everything you need</h3>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;">
          <div style="border:1px solid #eee;border-radius:12px;padding:16px;background:#fff;">
            <h4 data-anch="features.card1.title" data-type="Text" style="margin:0 0 6px 0;font-size:18px;font-weight:700;">Drag & Drop</h4>
            <p data-anch="features.card1.desc" data-type="Text" style="margin:0;color:#555;">Compose layouts fast with smart snapping.</p>
            <button data-anch="features.card1.cta" data-type="Button" style="margin-top:10px;padding:8px 12px;border:1px solid #ddd;border-radius:8px;background:#fff;cursor:pointer;">Learn more</button>
          </div>
          <div style="border:1px solid #eee;border-radius:12px;padding:16px;background:#fff;">
            <h4 data-anch="features.card2.title" data-type="Text" style="margin:0 0 6px 0;font-size:18px;font-weight:700;">Real-time Preview</h4>
            <p data-anch="features.card2.desc" data-type="Text" style="margin:0;color:#555;">See exact output as users would.</p>
            <button data-anch="features.card2.cta" data-type="Button" style="margin-top:10px;padding:8px 12px;border:1px solid #ddd;border-radius:8px;background:#fff;cursor:pointer;">Learn more</button>
          </div>
          <div style="border:1px solid #eee;border-radius:12px;padding:16px;background:#fff;">
            <h4 data-anch="features.card3.title" data-type="Text" style="margin:0 0 6px 0;font-size:18px;font-weight:700;">Graph-backed</h4>
            <p data-anch="features.card3.desc" data-type="Text" style="margin:0;color:#555;">Editable props map cleanly to code.</p>
            <button data-anch="features.card3.cta" data-type="Button" style="margin-top:10px;padding:8px 12px;border:1px solid #ddd;border-radius:8px;background:#fff;cursor:pointer;">Learn more</button>
          </div>
        </div>
      </div>
    </section>
  
    <!-- Testimonials -->
    <section data-anch="testimonials" data-type="Section" style="background:#fafafa;border-top:1px solid #eee;border-bottom:1px solid #eee;">
      <div style="max-width:1100px;margin:0 auto;padding:40px 20px;">
        <h3 data-anch="testimonials.heading" data-type="Text" style="margin:0 0 16px 0;font-size:24px;font-weight:800;">Loved by teams</h3>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
          <blockquote style="background:#fff;border:1px solid #eee;border-radius:12px;padding:16px;">
            <p data-anch="testimonials.q1" data-type="Text" style="margin:0;color:#444;line-height:1.6;">
              “Switched our marketing pages to WebCreatorX in a day. Our designer does it all.”
            </p>
            <p data-anch="testimonials.a1" data-type="Text" style="margin:8px 0 0 0;color:#777;font-size:13px;">— Mia, Growth Lead</p>
          </blockquote>
          <blockquote style="background:#fff;border:1px solid #eee;border-radius:12px;padding:16px;">
            <p data-anch="testimonials.q2" data-type="Text" style="margin:0;color:#444;line-height:1.6;">
              “Canvas overlay makes alignment a breeze. It feels like Figma for the web.”
            </p>
            <p data-anch="testimonials.a2" data-type="Text" style="margin:8px 0 0 0;color:#777;font-size:13px;">— Dan, Frontend Eng</p>
          </blockquote>
        </div>
      </div>
    </section>
  
    <!-- Pricing -->
    <section data-anch="pricing" data-type="Section" style="background:#fff;">
      <div style="max-width:1100px;margin:0 auto;padding:48px 20px;">
        <h3 data-anch="pricing.heading" data-type="Text" style="margin:0 0 20px 0;font-size:28px;font-weight:800;">Simple pricing</h3>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;">
          <div style="border:1px solid #eee;border-radius:12px;padding:16px;background:#fff;">
            <h4 data-anch="pricing.card1.title" data-type="Text" style="margin:0 0 6px 0;font-size:18px;font-weight:700;">Starter</h4>
            <p data-anch="pricing.card1.price" data-type="Text" style="margin:0;color:#111;font-size:24px;font-weight:800;">$0</p>
            <button data-anch="pricing.card1.cta" data-type="Button" style="margin-top:12px;padding:10px 12px;border:1px solid #ddd;border-radius:10px;background:#fff;cursor:pointer;">Choose</button>
          </div>
          <div style="border:2px solid #111;border-radius:12px;padding:16px;background:#111;color:#fff;transform:translateY(-6px);">
            <h4 data-anch="pricing.card2.title" data-type="Text" style="margin:0 0 6px 0;font-size:18px;font-weight:700;color:#fff;">Pro</h4>
            <p data-anch="pricing.card2.price" data-type="Text" style="margin:0;color:#fff;font-size:24px;font-weight:800;">$12</p>
            <button data-anch="pricing.card2.cta" data-type="Button" style="margin-top:12px;padding:10px 12px;border:1px solid #fff;border-radius:10px;background:#fff;color:#111;cursor:pointer;">Choose</button>
          </div>
          <div style="border:1px solid #eee;border-radius:12px;padding:16px;background:#fff;">
            <h4 data-anch="pricing.card3.title" data-type="Text" style="margin:0 0 6px 0;font-size:18px;font-weight:700;">Team</h4>
            <p data-anch="pricing.card3.price" data-type="Text" style="margin:0;color:#111;font-size:24px;font-weight:800;">$29</p>
            <button data-anch="pricing.card3.cta" data-type="Button" style="margin-top:12px;padding:10px 12px;border:1px solid #ddd;border-radius:10px;background:#fff;cursor:pointer;">Choose</button>
          </div>
        </div>
      </div>
    </section>
  
    <!-- Footer -->
    <section data-anch="footer" data-type="Section" style="background:#0e0e0e;color:#ddd;">
      <div style="max-width:1100px;margin:0 auto;padding:28px 20px;display:flex;align-items:center;justify-content:space-between;">
        <p data-anch="footer.brand" data-type="Text" style="margin:0;color:#ddd;">© 2025 WebCreatorX</p>
        <div style="display:flex;gap:16px;">
          <p data-anch="footer.privacy" data-type="Text" style="margin:0;color:#bbb;cursor:pointer;">Privacy</p>
          <p data-anch="footer.terms" data-type="Text" style="margin:0;color:#bbb;cursor:pointer;">Terms</p>
          <button data-anch="footer.cta" data-type="Button" style="padding:8px 12px;border:1px solid #444;border-radius:8px;background:#1a1a1a;color:#eee;cursor:pointer;">Contact</button>
        </div>
      </div>
    </section>
  </div>
  `.trim(),
  };
  