import * as common from '../src/common';

describe('makeInstallerURL', () => {
  it('generates valid installer URLs', async () => {
    const tests: [
      [
        string,
        common.Arch,
        common.Distribution,
        common.Variant,
        common.Platform
      ],
      string
    ][] = [
      [
        ['7.4', 'x64', 'full', 'regular', 'linux'],
        'https://mirror.racket-lang.org/installers/7.4/racket-7.4-x86_64-linux.sh'
      ],
      [
        ['7.4', 'x64', 'full', 'CS', 'linux'],
        'https://mirror.racket-lang.org/installers/7.4/racket-7.4-x86_64-linux-cs.sh'
      ],
      [
        ['7.4', 'x64', 'minimal', 'regular', 'linux'],
        'https://mirror.racket-lang.org/installers/7.4/racket-minimal-7.4-x86_64-linux.sh'
      ],
      [
        ['7.4', 'x64', 'minimal', 'CS', 'linux'],
        'https://mirror.racket-lang.org/installers/7.4/racket-minimal-7.4-x86_64-linux-cs.sh'
      ],
      [
        ['7.4', 'x64', 'full', 'regular', 'darwin'],
        'https://mirror.racket-lang.org/installers/7.4/racket-7.4-x86_64-macosx.dmg'
      ],
      [
        ['7.4', 'x64', 'full', 'CS', 'darwin'],
        'https://mirror.racket-lang.org/installers/7.4/racket-7.4-x86_64-macosx-cs.dmg'
      ],
      [
        ['7.4', 'x64', 'minimal', 'regular', 'darwin'],
        'https://mirror.racket-lang.org/installers/7.4/racket-minimal-7.4-x86_64-macosx.dmg'
      ],
      [
        ['7.4', 'x64', 'minimal', 'CS', 'darwin'],
        'https://mirror.racket-lang.org/installers/7.4/racket-minimal-7.4-x86_64-macosx-cs.dmg'
      ],
      [
        ['7.4', 'x64', 'full', 'regular', 'win32'],
        'https://mirror.racket-lang.org/installers/7.4/racket-7.4-x86_64-win32.exe'
      ],
      [
        ['7.4', 'x64', 'full', 'CS', 'win32'],
        'https://mirror.racket-lang.org/installers/7.4/racket-7.4-x86_64-win32-cs.exe'
      ],
      [
        ['7.4', 'x64', 'minimal', 'regular', 'win32'],
        'https://mirror.racket-lang.org/installers/7.4/racket-minimal-7.4-x86_64-win32.exe'
      ],
      [
        ['7.4', 'x64', 'minimal', 'CS', 'win32'],
        'https://mirror.racket-lang.org/installers/7.4/racket-minimal-7.4-x86_64-win32-cs.exe'
      ],
      [
        ['current', 'x64', 'full', 'regular', 'linux'],
        'https://www.cs.utah.edu/plt/snapshots/current/installers/racket-current-x86_64-linux-precise.sh'
      ],
      [
        ['current', 'x64', 'full', 'CS', 'linux'],
        'https://www.cs.utah.edu/plt/snapshots/current/installers/racket-current-x86_64-linux-cs-xenial.sh'
      ],
      [
        ['current', 'x64', 'minimal', 'regular', 'linux'],
        'https://www.cs.utah.edu/plt/snapshots/current/installers/min-racket-current-x86_64-linux-precise.sh'
      ],
      [
        ['current', 'x64', 'minimal', 'CS', 'linux'],
        'https://www.cs.utah.edu/plt/snapshots/current/installers/min-racket-current-x86_64-linux-cs-xenial.sh'
      ],
      [
        ['current', 'x64', 'full', 'regular', 'darwin'],
        'https://www.cs.utah.edu/plt/snapshots/current/installers/racket-current-x86_64-macosx.dmg'
      ],
      [
        ['current', 'x64', 'full', 'CS', 'darwin'],
        'https://www.cs.utah.edu/plt/snapshots/current/installers/racket-current-x86_64-macosx-cs.dmg'
      ],
      [
        ['current', 'x64', 'minimal', 'regular', 'darwin'],
        'https://www.cs.utah.edu/plt/snapshots/current/installers/min-racket-current-x86_64-macosx.dmg'
      ],
      [
        ['current', 'x64', 'minimal', 'CS', 'darwin'],
        'https://www.cs.utah.edu/plt/snapshots/current/installers/min-racket-current-x86_64-macosx-cs.dmg'
      ],
      [
        ['current', 'x64', 'full', 'regular', 'win32'],
        'https://www.cs.utah.edu/plt/snapshots/current/installers/racket-current-x86_64-win32.exe'
      ],
      [
        ['current', 'x64', 'full', 'CS', 'win32'],
        'https://www.cs.utah.edu/plt/snapshots/current/installers/racket-current-x86_64-win32-cs.exe'
      ],
      [
        ['current', 'x64', 'minimal', 'regular', 'win32'],
        'https://www.cs.utah.edu/plt/snapshots/current/installers/min-racket-current-x86_64-win32.exe'
      ],
      [
        ['current', 'x64', 'minimal', 'CS', 'win32'],
        'https://www.cs.utah.edu/plt/snapshots/current/installers/min-racket-current-x86_64-win32-cs.exe'
      ]
    ];

    for (const [args, expected] of tests) {
      expect(common.makeInstallerURL(...args)).toEqual(expected);
    }
  });
});
