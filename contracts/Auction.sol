// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract AucEngine {
    address public owner;
    uint constant duration= 1 days;

    struct Auction {
        address payable main;
        uint firstPrice;
        uint endPrice;
        string item;
    }

    function createAuction(uint _firstPrice, uint _endPrice, string _item, uint _duration) external {

    }

    function getPrice(uint i) public view returns(uint) {

    }

    function buy(uint i) external payable {

    }
}
