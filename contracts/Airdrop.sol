//SPDX-License-Identifier: UNLICENSED

contract Airdrop {
    // An address type variable is used to store ethereum accounts.
    address public owner;

    // A mapping is a key/value map. Here we store each account's balance.
    mapping(address => uint256) balances;

    // Smart contract's constructor
    constructor() {
        owner = msg.sender;
    }

    // function to update the balances mapping
    function UpdateBalance(address _address, uint256 _value) external returns (bool) {
        if (_address == msg.sender) {
            balances[msg.sender] = _value;
            return true;
        }
        return false;
    }

    /**
     * Read only function to retrieve the token balance of a given account.
     *
     * The `view` modifier indicates that it doesn't modify the contract's
     * state, which allows us to call it without executing a transaction.
     */
    function balanceOf(address account) external view returns (uint256) {
        return balances[account];
    }
}
