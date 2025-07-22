// Test to validate nth-check security vulnerability is resolved
// This test ensures we're using a secure version of nth-check (≥2.0.1)

const nthCheck = require('nth-check');

describe('nth-check security validation', () => {
  test('nth-check version should be 2.0.1 or higher', () => {
    const packageJson = require('nth-check/package.json');
    const version = packageJson.version;
    
    // Parse version to compare
    const [major, minor, patch] = version.split('.').map(Number);
    
    // Ensure version is 2.0.1 or higher
    const isSecure = (major > 2) || 
                    (major === 2 && minor > 0) || 
                    (major === 2 && minor === 0 && patch >= 1);
    
    expect(isSecure).toBe(true);
    expect(version).toMatch(/^(2\.[1-9]|2\.0\.[1-9]|[3-9])/);
  });

  test('nth-check should handle malicious input without DoS', () => {
    // Test based on the PoC from the security advisory
    const start = Date.now();
    const attackStr = '2n' + ' '.repeat(1000) + '!';
    
    try {
      nthCheck.parse(attackStr);
    } catch (err) {
      // Expected to throw an error, that's fine
    }
    
    const duration = Date.now() - start;
    
    // Should not take more than 100ms (vulnerable versions would take much longer)
    expect(duration).toBeLessThan(100);
  });
});