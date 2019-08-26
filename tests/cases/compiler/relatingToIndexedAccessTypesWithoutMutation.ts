// @strict

// Repro of #32816

type Target<T> = T extends null ? null : T;
type Target2<T> = { "one": null, "two": T }[T extends null ? "one" : "two"];
type Target3<T> = [null, T][T extends null ? 0 : 1];

function tst<T extends string>() {
    // These two pass as expected:
    const case0: Target2<T | null> = 1 as any as Target2<T | null>;
    const case1: { prop: Target<T | null> } = 1 as any as { prop: Target<T | null> };
    const case2: { prop: Target2<T> } = 1 as any as { prop: Target2<T> };
    const case3: { prop: Target3<T> } = 1 as any as { prop: Target3<T> };

    // These two fail as expected:
    const case4: { prop: Target2<T> } = 1 as any as { prop: Target2<T | null> };
    const case5: { prop: Target3<T> } = 1 as any as { prop: Target3<T | null> };

    // These two are expected to pass, but fail:
    const case6: { prop: Target2<T | null> } = 1 as any as { prop: Target2<T | null> };
    const case7: { prop: Target3<T | null> } = 1 as any as { prop: Target3<T | null> };
}
