import { useState } from 'react';

function SubstackRedirectForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const substackURL = new URL('https://hotelarkham.substack.com/subscribe');
    substackURL.searchParams.append('email', email);
    window.open(substackURL.toString(), '_blank', 'noopener,noreferrer');
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
        <div className="d-flex mb-3" style={{ maxWidth: '400px', width: '100%' }}>
            <input
                type="email"
                required
                placeholder="Enter your email"
                className="form-control me-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">
                Subscribe
            </button>
        </div>
        <small className="text-muted" style={{ maxWidth: '400px', textAlign: 'center' }}>
            You will be redirected to Substack to complete your subscription.
        </small>
    </form>
  );
}

export default SubstackRedirectForm;