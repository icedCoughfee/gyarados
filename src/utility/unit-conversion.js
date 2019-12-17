const decimetersToFt = decimeters => decimeters / 3.048;

const hectogramToKg = hectograms => hectograms / 10;
const hectogramToLb = hectograms => hectograms / 4.536;
const decimetersToMeter = decimeters => decimeters / 10;
const decimetersToImperialHeight = decimeters => {
    const floatFeet = decimetersToFt(decimeters);
    let feet = Math.floor(floatFeet);
    let inches = Math.round(feet ? (floatFeet % feet) : floatFeet * 12)
    if (inches === 12) {
        feet = 1;
        inches = 0;
    }
    return {
        feet,
        inches
    };
};

export {
    hectogramToKg,
    hectogramToLb,
    decimetersToMeter,
    decimetersToImperialHeight
};