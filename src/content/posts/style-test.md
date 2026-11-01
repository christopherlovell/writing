---
title: Style test
description: A draft for checking how each kind of content looks. It never appears on the published site.
date: 2026-11-01
draft: true
---

This is an ordinary paragraph, long enough to wrap across several lines so the measure and leading can be judged properly. It includes [a link](https://christopherlovell.co.uk), some *italic* and **bold** text, a bit of `inline code`, and a footnote.[^1]

## A section heading

Inline maths sits in the line, like the luminosity distance $d_L = (1+z)\,d_M$, while display maths gets its own block:

$$
\rho_{\mathrm{crit}} = \frac{3 H_0^2}{8 \pi G}
$$

### A smaller heading

- A first point in a list
- A second point, which runs a little longer so it wraps onto a new line
- A third point

> A block quotation, for when someone else said it better. It's indented and set in a quieter colour.

```python
import numpy as np

def hubble_time(H0=70):
    """Hubble time in Gyr."""
    return 977.8 / H0
```

| Quantity | Value |
| --- | --- |
| $H_0$ | 70 km s⁻¹ Mpc⁻¹ |
| $\Omega_m$ | 0.3 |

---

A last paragraph after a section break.

[^1]: Footnotes collect at the bottom of the post.
