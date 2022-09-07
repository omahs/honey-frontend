export type VeHoney = {
  "version": "0.1.0",
  "name": "ve_honey",
  "instructions": [
    {
      "name": "initLocker",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "base",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "locker",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "governor",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "LockerParams"
          }
        }
      ]
    },
    {
      "name": "initEscrow",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "locker",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "escrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrowOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "initTreasury",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "locker",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "setLockerParams",
      "accounts": [
        {
          "name": "locker",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "governor",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "smartWallet",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "LockerParams"
          }
        }
      ]
    },
    {
      "name": "approveProgramLockPrivilege",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "locker",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "whitelistEntry",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "governor",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "smartWallet",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "executableId",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "whitelistedOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "revokeProgramLockPrivilege",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "locker",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "whitelistEntry",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "governor",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "smartWallet",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "addProof",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "locker",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "proof",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "address",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "governor",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "smartWallet",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "proofType",
          "type": "u8"
        }
      ]
    },
    {
      "name": "removeProof",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "locker",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "proof",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "address",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "governor",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "smartWallet",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "lock",
      "accounts": [
        {
          "name": "locker",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lockedTokens",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrowOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "sourceTokens",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sourceTokensAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "duration",
          "type": "i64"
        }
      ]
    },
    {
      "name": "lockNft",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "base",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "locker",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "receipt",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lockedTokens",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lockerTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "nftSource",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "receiptId",
          "type": "u64"
        },
        {
          "name": "duration",
          "type": "i64"
        }
      ]
    },
    {
      "name": "claim",
      "accounts": [
        {
          "name": "locker",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrowOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "lockedTokens",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "destinationTokens",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftReceipt",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "exit",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "locker",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrowOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "lockedTokens",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "destinationTokens",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "closeEscrow",
      "accounts": [
        {
          "name": "locker",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "escrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrowOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "lockedTokens",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "destinationTokens",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "fundsReceiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "activateProposal",
      "accounts": [
        {
          "name": "locker",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "governor",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "proposal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrow",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "escrowOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "governProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "castVote",
      "accounts": [
        {
          "name": "locker",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "escrow",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "voteDelegate",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "proposal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "governor",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "governProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "side",
          "type": "u8"
        }
      ]
    },
    {
      "name": "setVoteDelegate",
      "accounts": [
        {
          "name": "escrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrowOwner",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "newDelegate",
          "type": "publicKey"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "escrow",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "locker",
            "type": "publicKey"
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "tokens",
            "type": "publicKey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "escrowStartedAt",
            "type": "i64"
          },
          {
            "name": "escrowEndsAt",
            "type": "i64"
          },
          {
            "name": "receiptCount",
            "type": "u64"
          },
          {
            "name": "voteDelegate",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "locker",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "base",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "tokenMint",
            "type": "publicKey"
          },
          {
            "name": "lockedSupply",
            "type": "u64"
          },
          {
            "name": "governor",
            "type": "publicKey"
          },
          {
            "name": "params",
            "type": {
              "defined": "LockerParams"
            }
          }
        ]
      }
    },
    {
      "name": "nftReceipt",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "receiptId",
            "type": "u64"
          },
          {
            "name": "locker",
            "type": "publicKey"
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "vestStartedAt",
            "type": "i64"
          },
          {
            "name": "vestEndsAt",
            "type": "i64"
          },
          {
            "name": "claimedAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "proof",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "locker",
            "type": "publicKey"
          },
          {
            "name": "proofType",
            "type": "u8"
          },
          {
            "name": "proofAddress",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "whitelistEntry",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "locker",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "programId",
            "type": "publicKey"
          },
          {
            "name": "owner",
            "type": "publicKey"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "LockerParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "minStakeDuration",
            "type": "u64"
          },
          {
            "name": "maxStakeDuration",
            "type": "u64"
          },
          {
            "name": "whitelistEnabled",
            "type": "bool"
          },
          {
            "name": "multiplier",
            "type": "u8"
          },
          {
            "name": "proposalActivationMinVotes",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "ExitEscrowEvent",
      "fields": [
        {
          "name": "escrowOwner",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "locker",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "timestamp",
          "type": "i64",
          "index": false
        },
        {
          "name": "lockedSupply",
          "type": "u64",
          "index": false
        },
        {
          "name": "releasedAmount",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "InitEscrowEvent",
      "fields": [
        {
          "name": "escrow",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "escrowOwner",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "locker",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "timestamp",
          "type": "i64",
          "index": false
        }
      ]
    },
    {
      "name": "InitLockerEvent",
      "fields": [
        {
          "name": "locker",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "tokenMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "governor",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "params",
          "type": {
            "defined": "LockerParams"
          },
          "index": false
        }
      ]
    },
    {
      "name": "LockEvent",
      "fields": [
        {
          "name": "locker",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "escrowOwner",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "tokenMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount",
          "type": "u64",
          "index": false
        },
        {
          "name": "lockerSupply",
          "type": "u64",
          "index": false
        },
        {
          "name": "duration",
          "type": "i64",
          "index": false
        },
        {
          "name": "prevEscrowEndsAt",
          "type": "i64",
          "index": false
        },
        {
          "name": "nextEscrowEndsAt",
          "type": "i64",
          "index": false
        },
        {
          "name": "nextEscrowStartedAt",
          "type": "i64",
          "index": false
        }
      ]
    },
    {
      "name": "SetVoteDelegateEvent",
      "fields": [
        {
          "name": "escrowOwner",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "oldDelegate",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "newDelegate",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "ApproveLockPrivilegeEvent",
      "fields": [
        {
          "name": "locker",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "programId",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "owner",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "timestamp",
          "type": "i64",
          "index": false
        }
      ]
    },
    {
      "name": "RevokeLockPrivilegeEvent",
      "fields": [
        {
          "name": "locker",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "programId",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "timestamp",
          "type": "i64",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "EscrowNotEnded",
      "msg": "Escrow has not ended."
    },
    {
      "code": 6001,
      "name": "InvalidLockerAdmin",
      "msg": "Invalid locker admin"
    },
    {
      "code": 6002,
      "name": "InvalidLocker",
      "msg": "Invalid locker"
    },
    {
      "code": 6003,
      "name": "LockupDurationTooShort",
      "msg": "Lockup duration must at least be the min stake duration."
    },
    {
      "code": 6004,
      "name": "LockupDurationTooLong",
      "msg": "Lockup duration must at most be the max stake duration."
    },
    {
      "code": 6005,
      "name": "RefreshCannotShorten",
      "msg": "A voting escrow refresh cannot shorten the escrow time remaining."
    },
    {
      "code": 6006,
      "name": "MustProvideWhitelist",
      "msg": "Program whitelist enabled; please provide whitelist entry and instructions sysvar"
    },
    {
      "code": 6007,
      "name": "ProgramNotWhitelisted",
      "msg": "CPI caller not whitelisted to invoke lock instruction."
    },
    {
      "code": 6008,
      "name": "EscrowOwnerNotWhitelisted",
      "msg": "CPI caller not whitelisted for escrow owner to invoke lock instruction."
    },
    {
      "code": 6009,
      "name": "EscrowExpired",
      "msg": "Escrow was already expired."
    },
    {
      "code": 6010,
      "name": "LockedSupplyMismatch",
      "msg": "Token lock failed, locked supply mismatches the exact amount."
    },
    {
      "code": 6011,
      "name": "EscrowInUse",
      "msg": "The escrow has already locked."
    },
    {
      "code": 6012,
      "name": "EscrowNoBalance",
      "msg": "The escrow doesn't have balance"
    },
    {
      "code": 6013,
      "name": "ProposalMustBeActive",
      "msg": "The proposal must be active"
    },
    {
      "code": 6014,
      "name": "GovernorMismatch",
      "msg": "Governor mismatch"
    },
    {
      "code": 6015,
      "name": "SmartWalletMismatch",
      "msg": "Smart wallet on governor mismatch"
    },
    {
      "code": 6016,
      "name": "ProgramIdMustBeExecutable",
      "msg": "Program id must be executable"
    },
    {
      "code": 6017,
      "name": "InvalidAccountOwner",
      "msg": "Invalid account owner"
    },
    {
      "code": 6018,
      "name": "InsufficientVotingPower",
      "msg": "Insufficient voting power to activate a proposal"
    },
    {
      "code": 6019,
      "name": "InvalidLockerMint",
      "msg": "Invalid locker token mint"
    },
    {
      "code": 6020,
      "name": "InvariantViolated",
      "msg": "Invariant violated"
    },
    {
      "code": 6021,
      "name": "InvalidProofType",
      "msg": "Invalid proof type"
    },
    {
      "code": 6022,
      "name": "InvalidProof",
      "msg": "Invalid NFT proof"
    },
    {
      "code": 6023,
      "name": "NoProofProvided",
      "msg": "No proof provided"
    },
    {
      "code": 6024,
      "name": "InvalidTokenOwner",
      "msg": "Invalid token owner"
    },
    {
      "code": 6025,
      "name": "InvalidAssociatedTokenAccount",
      "msg": "Invalid associated token account"
    },
    {
      "code": 6026,
      "name": "VestingDurationExceeded",
      "msg": "NFT vesting duration exceeded"
    },
    {
      "code": 6027,
      "name": "InvalidRemainingAccounts",
      "msg": "Invalid remaining accounts"
    },
    {
      "code": 6028,
      "name": "NotClaimable",
      "msg": "Not claimable"
    }
  ]
};

export const IDL: VeHoney = {
  "version": "0.1.0",
  "name": "ve_honey",
  "instructions": [
    {
      "name": "initLocker",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "base",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "locker",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "governor",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "LockerParams"
          }
        }
      ]
    },
    {
      "name": "initEscrow",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "locker",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "escrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrowOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "initTreasury",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "locker",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "setLockerParams",
      "accounts": [
        {
          "name": "locker",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "governor",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "smartWallet",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "LockerParams"
          }
        }
      ]
    },
    {
      "name": "approveProgramLockPrivilege",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "locker",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "whitelistEntry",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "governor",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "smartWallet",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "executableId",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "whitelistedOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "revokeProgramLockPrivilege",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "locker",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "whitelistEntry",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "governor",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "smartWallet",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "addProof",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "locker",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "proof",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "address",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "governor",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "smartWallet",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "proofType",
          "type": "u8"
        }
      ]
    },
    {
      "name": "removeProof",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "locker",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "proof",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "address",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "governor",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "smartWallet",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "lock",
      "accounts": [
        {
          "name": "locker",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lockedTokens",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrowOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "sourceTokens",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sourceTokensAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "duration",
          "type": "i64"
        }
      ]
    },
    {
      "name": "lockNft",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "base",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "locker",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "receipt",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lockedTokens",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lockerTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "nftSource",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "receiptId",
          "type": "u64"
        },
        {
          "name": "duration",
          "type": "i64"
        }
      ]
    },
    {
      "name": "claim",
      "accounts": [
        {
          "name": "locker",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrowOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "lockedTokens",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "destinationTokens",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftReceipt",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "exit",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "locker",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrowOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "lockedTokens",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "destinationTokens",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "closeEscrow",
      "accounts": [
        {
          "name": "locker",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "escrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrowOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "lockedTokens",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "destinationTokens",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "fundsReceiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "activateProposal",
      "accounts": [
        {
          "name": "locker",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "governor",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "proposal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrow",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "escrowOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "governProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "castVote",
      "accounts": [
        {
          "name": "locker",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "escrow",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "voteDelegate",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "proposal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "governor",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "governProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "side",
          "type": "u8"
        }
      ]
    },
    {
      "name": "setVoteDelegate",
      "accounts": [
        {
          "name": "escrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrowOwner",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "newDelegate",
          "type": "publicKey"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "escrow",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "locker",
            "type": "publicKey"
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "tokens",
            "type": "publicKey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "escrowStartedAt",
            "type": "i64"
          },
          {
            "name": "escrowEndsAt",
            "type": "i64"
          },
          {
            "name": "receiptCount",
            "type": "u64"
          },
          {
            "name": "voteDelegate",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "locker",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "base",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "tokenMint",
            "type": "publicKey"
          },
          {
            "name": "lockedSupply",
            "type": "u64"
          },
          {
            "name": "governor",
            "type": "publicKey"
          },
          {
            "name": "params",
            "type": {
              "defined": "LockerParams"
            }
          }
        ]
      }
    },
    {
      "name": "nftReceipt",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "receiptId",
            "type": "u64"
          },
          {
            "name": "locker",
            "type": "publicKey"
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "vestStartedAt",
            "type": "i64"
          },
          {
            "name": "vestEndsAt",
            "type": "i64"
          },
          {
            "name": "claimedAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "proof",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "locker",
            "type": "publicKey"
          },
          {
            "name": "proofType",
            "type": "u8"
          },
          {
            "name": "proofAddress",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "whitelistEntry",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "locker",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "programId",
            "type": "publicKey"
          },
          {
            "name": "owner",
            "type": "publicKey"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "LockerParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "minStakeDuration",
            "type": "u64"
          },
          {
            "name": "maxStakeDuration",
            "type": "u64"
          },
          {
            "name": "whitelistEnabled",
            "type": "bool"
          },
          {
            "name": "multiplier",
            "type": "u8"
          },
          {
            "name": "proposalActivationMinVotes",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "ExitEscrowEvent",
      "fields": [
        {
          "name": "escrowOwner",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "locker",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "timestamp",
          "type": "i64",
          "index": false
        },
        {
          "name": "lockedSupply",
          "type": "u64",
          "index": false
        },
        {
          "name": "releasedAmount",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "InitEscrowEvent",
      "fields": [
        {
          "name": "escrow",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "escrowOwner",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "locker",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "timestamp",
          "type": "i64",
          "index": false
        }
      ]
    },
    {
      "name": "InitLockerEvent",
      "fields": [
        {
          "name": "locker",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "tokenMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "governor",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "params",
          "type": {
            "defined": "LockerParams"
          },
          "index": false
        }
      ]
    },
    {
      "name": "LockEvent",
      "fields": [
        {
          "name": "locker",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "escrowOwner",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "tokenMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount",
          "type": "u64",
          "index": false
        },
        {
          "name": "lockerSupply",
          "type": "u64",
          "index": false
        },
        {
          "name": "duration",
          "type": "i64",
          "index": false
        },
        {
          "name": "prevEscrowEndsAt",
          "type": "i64",
          "index": false
        },
        {
          "name": "nextEscrowEndsAt",
          "type": "i64",
          "index": false
        },
        {
          "name": "nextEscrowStartedAt",
          "type": "i64",
          "index": false
        }
      ]
    },
    {
      "name": "SetVoteDelegateEvent",
      "fields": [
        {
          "name": "escrowOwner",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "oldDelegate",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "newDelegate",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "ApproveLockPrivilegeEvent",
      "fields": [
        {
          "name": "locker",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "programId",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "owner",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "timestamp",
          "type": "i64",
          "index": false
        }
      ]
    },
    {
      "name": "RevokeLockPrivilegeEvent",
      "fields": [
        {
          "name": "locker",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "programId",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "timestamp",
          "type": "i64",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "EscrowNotEnded",
      "msg": "Escrow has not ended."
    },
    {
      "code": 6001,
      "name": "InvalidLockerAdmin",
      "msg": "Invalid locker admin"
    },
    {
      "code": 6002,
      "name": "InvalidLocker",
      "msg": "Invalid locker"
    },
    {
      "code": 6003,
      "name": "LockupDurationTooShort",
      "msg": "Lockup duration must at least be the min stake duration."
    },
    {
      "code": 6004,
      "name": "LockupDurationTooLong",
      "msg": "Lockup duration must at most be the max stake duration."
    },
    {
      "code": 6005,
      "name": "RefreshCannotShorten",
      "msg": "A voting escrow refresh cannot shorten the escrow time remaining."
    },
    {
      "code": 6006,
      "name": "MustProvideWhitelist",
      "msg": "Program whitelist enabled; please provide whitelist entry and instructions sysvar"
    },
    {
      "code": 6007,
      "name": "ProgramNotWhitelisted",
      "msg": "CPI caller not whitelisted to invoke lock instruction."
    },
    {
      "code": 6008,
      "name": "EscrowOwnerNotWhitelisted",
      "msg": "CPI caller not whitelisted for escrow owner to invoke lock instruction."
    },
    {
      "code": 6009,
      "name": "EscrowExpired",
      "msg": "Escrow was already expired."
    },
    {
      "code": 6010,
      "name": "LockedSupplyMismatch",
      "msg": "Token lock failed, locked supply mismatches the exact amount."
    },
    {
      "code": 6011,
      "name": "EscrowInUse",
      "msg": "The escrow has already locked."
    },
    {
      "code": 6012,
      "name": "EscrowNoBalance",
      "msg": "The escrow doesn't have balance"
    },
    {
      "code": 6013,
      "name": "ProposalMustBeActive",
      "msg": "The proposal must be active"
    },
    {
      "code": 6014,
      "name": "GovernorMismatch",
      "msg": "Governor mismatch"
    },
    {
      "code": 6015,
      "name": "SmartWalletMismatch",
      "msg": "Smart wallet on governor mismatch"
    },
    {
      "code": 6016,
      "name": "ProgramIdMustBeExecutable",
      "msg": "Program id must be executable"
    },
    {
      "code": 6017,
      "name": "InvalidAccountOwner",
      "msg": "Invalid account owner"
    },
    {
      "code": 6018,
      "name": "InsufficientVotingPower",
      "msg": "Insufficient voting power to activate a proposal"
    },
    {
      "code": 6019,
      "name": "InvalidLockerMint",
      "msg": "Invalid locker token mint"
    },
    {
      "code": 6020,
      "name": "InvariantViolated",
      "msg": "Invariant violated"
    },
    {
      "code": 6021,
      "name": "InvalidProofType",
      "msg": "Invalid proof type"
    },
    {
      "code": 6022,
      "name": "InvalidProof",
      "msg": "Invalid NFT proof"
    },
    {
      "code": 6023,
      "name": "NoProofProvided",
      "msg": "No proof provided"
    },
    {
      "code": 6024,
      "name": "InvalidTokenOwner",
      "msg": "Invalid token owner"
    },
    {
      "code": 6025,
      "name": "InvalidAssociatedTokenAccount",
      "msg": "Invalid associated token account"
    },
    {
      "code": 6026,
      "name": "VestingDurationExceeded",
      "msg": "NFT vesting duration exceeded"
    },
    {
      "code": 6027,
      "name": "InvalidRemainingAccounts",
      "msg": "Invalid remaining accounts"
    },
    {
      "code": 6028,
      "name": "NotClaimable",
      "msg": "Not claimable"
    }
  ]
};
