// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Hosho is ERC20, ReentrancyGuard, Ownable {
    address public immutable baseAsset;

    constructor(
        address _baseAsset,
        string memory _name,
        string memory _symbol
    ) Ownable(msg.sender) ERC20(_name, _symbol) {
        baseAsset = _baseAsset;
    }
}
