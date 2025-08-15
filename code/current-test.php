<?php

function somaPares(array $numeros): int {
    return array_reduce(
        array_filter($numeros, fn($n) => $n % 2 === 0),
        fn($acc, $n) => $acc + $n,
        0
    );
}

echo somaPares([1, 2, 3, 4, 5, 6]) . PHP_EOL;