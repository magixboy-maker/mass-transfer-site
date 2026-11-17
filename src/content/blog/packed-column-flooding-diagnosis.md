---
title: "Packed Column Flooding: Read the Symptoms Before You Cut the Reflux"
description: "Flooding, channeling and foaming all look like a capacity limit. Read the pressure drop curve and column profile to find out which one you actually have."
pubDate: 2026-11-16
---

# Packed Column Flooding: Read the Symptoms Before You Cut the Reflux

When a packed column stops meeting its specification, the first reaction on the control room floor is almost always the same: pull reflux back, reduce boil-up, accept the purity hit, and deal with it at the next turnaround. That reflex is expensive. In most cases the column is not short of capacity at all — it is short of distribution, or the bed is no longer the bed it was designed as. Cutting reflux hides the symptom and puts the real fault on hold for another six months, by which time the packing may be permanently damaged.

This article is about diagnosis, not theory. It sets out how to tell flooding apart from the three conditions that imitate it, which measurements to trust, and what each finding points to as a fix.

![Interior of a packed absorption column looking through a manway at a bed of ceramic random packing](/images/packed-column-packing-bed.webp)

## Flooding is a limit, not a fault

Flooding is the point at which the vapour can no longer flow upward without carrying liquid back down against the intended direction. Liquid holdup in the bed rises sharply, the free area for gas collapses, and pressure drop climbs almost vertically. Efficiency does not degrade gently — it falls off a cliff, because the bed has stopped being a mass transfer device and become a froth-filled restriction.

A correctly designed column operates at 70–80% of flood. That margin absorbs fouling, flow upsets and the normal scatter in packing performance. When a column that has run for years at 60% of flood suddenly behaves as if it is at 95%, something has changed inside the vessel. Flooding is a symptom of that change, not the change itself.

## The three numbers that decide the diagnosis

Before touching the process, get three things on one page:

**Pressure drop across each bed.** Not the whole column — each bed separately. If the vessel only has one differential pressure transmitter across the full packed height, look for local gauges or temporary taps. A single number cannot distinguish a uniformly overloaded bed from one blocked section.

**Gas load factor F at the operating point.** F is superficial vapour velocity multiplied by the square root of vapour density. Pressure drop scales with roughly F² in the normal operating range, and deviation from that square law is the single most useful diagnostic signal available.

**Liquid rate and its distribution.** Reflux or wash rate per unit area, and whether the distributor is still delivering it evenly. A distributor that has lost 20% of its drip points behaves like a column that has lost capacity.

If any of these three is missing or unreliable, fix the instrumentation before drawing conclusions. A blocked pressure tap reads low and steady; a transmitter with a drifting zero reads whatever it was last calibrated to. Both have sent more engineers chasing packing problems than any real flooding event.

## Reading the pressure drop curve

Plot pressure drop per metre of bed against F on log–log axes. Three regions appear:

- **Below the loading point,** the line is straight with a slope of about 2. The bed is behaving as designed.
- **At the loading point,** liquid starts to accumulate faster than it drains. The curve bends upward.
- **At the flooding point,** the slope becomes nearly vertical. This is the hydraulic limit.

![Chart of pressure drop against gas load factor for a packed column, showing the loading point and the flooding point, with curves for foaming and channeling](/images/packed-column-flooding-dp-curve.svg)

The value of this plot is not the absolute number — published packing data varies by supplier and by test method — but the *shape*. A bed that reaches a vertical slope at 65% of its historical flood point has not lost 35% of its capacity to thin air. One of the mechanisms below is consuming it.

## Symptom one: pressure drop rising faster than the square of gas load

This is the classic flooding signature and the easiest to confirm, because it needs no additional instrumentation beyond what the plant already has.

Take readings at three or four stable operating points, preferably during a slow rate change rather than a step change. If ΔP rises with an exponent closer to 3 than to 2, the bed is retaining liquid. If the exponent is above 4, the column is already in the flooded region and the numbers at the top of that trend should not be used to size anything.

One caution: wet packing always shows a slightly higher exponent than dry packing, and small columns show more scatter than large ones. The trend matters, not a single pair of points.

## Symptom two: the profile moves before the numbers do

Every column has a temperature or composition profile, and flooding distorts it in a recognisable way. In distillation, the mass transfer zone is pushed upward: the top of the column gets warmer, the overhead product goes off-specification on heavies, and the reboiler duty required to hold the same separation climbs. In absorption, the treated gas outlet concentration rises even though the inlet loading has not changed.

The useful part is the *location* of the distortion. A profile that has shifted upward across the whole bed points to a hydraulic limit. A profile that is normal for the lower two-thirds and poor only in the top half points to maldistribution that has accumulated with height — liquid has had time to migrate to the wall. A profile with a sharp local break at one bed interface points to a mechanical problem: a collapsed section, a blocked support grid, or a liquid collector that is not draining.

## Symptom three: more reflux buys nothing

This is the observation that most often gets misread. Operators add reflux to improve purity, see no improvement, add more, and eventually conclude the column is flooded. Sometimes it is. But the same response occurs when the liquid is not being spread across the bed: extra liquid simply joins the stream that is already bypassing the dry area.

The distinguishing detail is what happens to pressure drop during the test. If adding reflux raises ΔP sharply while purity stays flat, the column is close to its hydraulic limit and the extra liquid is going into holdup. If ΔP barely moves while purity stays flat, the liquid is not reaching the packing at all — suspect the distributor, not the bed.

## What looks like flooding but is not

Four conditions produce nearly the same operational complaints. Separating them early avoids replacing perfectly good packing.

| Observation | Flooding | Channeling | Foaming | Distributor fault |
|---|---|---|---|---|
| Pressure drop | Rises steeply, above F² trend | Below normal for the rate | Above normal, rises early | Normal, or slightly low |
| Efficiency | Collapses suddenly | Poor from the start, no clear cliff | Gradually worse, erratic | Poor in upper beds only |
| Flood point | At expected rate | Later than expected | Earlier than expected | Apparent, not real |
| Response to more reflux | ΔP up, purity flat | ΔP up, purity flat | Worse — more foam | Purity may improve briefly |
| Visible on inspection | Liquid hold-up, froth at bed top | Dry patches, wall flow | Foam layer, carryover | Dry areas under drip points |

**Channeling** is the most commonly misdiagnosed. Pressure drop looks comfortable, so the column appears to have spare capacity, yet the separation is poor. The bed has developed preferential paths — often from poor initial loading, from packing settling unevenly, or from fines that have migrated into one region. The tell is a column that floods later than its design data predicts while never achieving design efficiency. A column that is genuinely short of capacity will not do that.

**Foaming** raises pressure drop and triggers flooding at a lower gas rate than clean service would allow. Systems with amines, glycols, caustic wash or any surface-active component are candidates. Foaming often appears after a change in feed composition rather than after a change in rate, which is a useful way to separate it from a hydraulic limit.

**Distributor faults** mimic flooding from the outside because the column cannot reach its rated throughput without losing efficiency. Internally the bed may be half dry. Trough-and-drip-point distributors with partially blocked holes, pan distributors with a level problem, and pipe distributors that have lost their pressure margin all produce this pattern.

**Support grid and collector restrictions** show up as a step change in the pressure drop profile. If ΔP across one bed rises while the others stay flat, look below that bed before looking at the packing.

## Check the distributor before you blame the packing

Liquid distribution quality sets the practical efficiency of a random packed bed more than any other single factor. A bed of good packing under a poor distributor performs like a bed of mediocre packing under a good one — at best.

![Three cross-sections of a packed bed showing uniform irrigation, channeling with dry patches, and wall flow](/images/packed-column-liquid-distribution.svg)

What to verify on inspection:

- **Drip point density** against the original drawing. Plugged holes are common in services with suspended solids, crystallising salts or polymer formation.
- **Levelness** of troughs and pans. A trough out of level by a few millimetres redistributes liquid over several metres of bed height.
- **Free passage** through the distributor's own feed and vent paths. A distributor that cannot vent will not distribute.
- **Irrigation of the wall region.** Wall flow starts at the distributor; the bed amplifies it.
- **Clearance to the bed top.** Too little space causes liquid to back up into the distributor; too much allows the falling liquid to re-converge into streams.

## Check the bed itself

If distribution is sound, the next question is whether the bed is still the geometry it was specified as. Random packing settles after commissioning — a few percent of bed height is normal. Beyond that, look for:

- **Ceramic breakage** from thermal shock, water hammer or rough loading, which produces fines that block the void space from below.
- **Plastic deformation** in services running close to the material's thermal limit, where rings soften and lose their shape under bed weight.
- **Metal corrosion or erosion**, particularly at the bed inlet where the liquid first contacts the packing.
- **Fouling and scaling** on the packing surface, which reduces void fraction and raises pressure drop at unchanged gas rate.
- **Bed lifting or displacement** after a pressure surge, which leaves an uneven top surface.

Bulk density measured on a sample is a quick cross-check: a bed that has gained weight per unit volume has gained deposits.

## Fixes that do not require a new column

Most flooding cases are resolved inside the existing shell. In order of cost:

**Restore the distributor.** New drip points, a redesigned trough layout, or conversion to a higher-performance distributor often recovers more capacity than a packing change, at a fraction of the cost. This is the first thing to cost out, not the last.

**Change the packing, not the vessel.** A higher-capacity random packing in the same nominal size, or a move from a conventional ring to an open-geometry design, buys throughput at the same bed height. Where the constraint is pressure drop rather than capacity, a larger nominal size at the same surface area is the cheaper route.

**Add bed height only if the profile supports it.** Adding packing to a column that is already maldistributed makes the problem worse, because the liquid has further to travel and more opportunity to segregate.

**Go to structured packing when the duty demands it.** Structured packing earns its cost in vacuum service, in columns with a tight pressure drop budget, and in revamps where the shell diameter is fixed and the capacity gap is large. It is the wrong answer where the service is fouling, where the liquid load is very low, or where the real problem was distribution all along.

## What to send us

If you are working through a flooding case and want a second opinion on the packing side, these details let us give a useful answer rather than a generic one:

- Column diameter, packed height per bed, and number of beds
- Current packing type, nominal size and material
- Gas and liquid rates at the normal and maximum case, with vapour density
- The pressure drop readings you have, and at which rates they were taken
- Service description — what the column separates, and any fouling, crystallising or foaming tendency
- What changed before the problem appeared: rate, feed, reflux, a shutdown, or nothing obvious

Send those and we will tell you whether the numbers point to a hydraulic limit, a distribution problem, or a bed that needs replacing — including when the honest answer is that the packing is not your constraint.
