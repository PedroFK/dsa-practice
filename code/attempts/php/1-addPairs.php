<?php

function addPairs(array $numbers): int {
    return array_reduce(
        array_filter($numbers, fn($n) => $n % 2 === 0),
        fn($acc, $n) => $acc + $n,
        0
    );
}

echo addPairs([1, 2, 3, 4, 5, 6]) . PHP_EOL;