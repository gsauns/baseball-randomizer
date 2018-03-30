# The Divisionizer

## Prerequisites

(All commands from Terminal, Mac only):

- Homebrew: `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

- All, if needed: `brew install node yarn git`

Piece by piece:
- Node.js: `brew install node`
- Yarn: `brew install yarn`
- Git (for cloning): `brew install git`

## Usage

1. Clone this repo somewhere: `git clone https://github.com/gsauns/baseball-randomizer.git`
2. `cd baseball-randomizer`
3. `./run`
    - Default is points rank.
    - To run with draft rank: `./run draftrank`
    - To run with the actual points: `./run points`
