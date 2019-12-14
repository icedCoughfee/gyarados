const decimetersToFt = decimeters => decimeters / 3.048;

const hectogramToKg = hectograms => hectograms / 10;
const hectogramToLb = hectograms => hectograms / 4.536;
const decimetersToMeter = decimeters => decimeters / 10;
const decimetersToImperialHeight = decimeters => {
    const floatFeet = decimetersToFt(decimeters);
    const feet = Math.floor(floatFeet);
    return {
        feet,
        inches: Math.round((floatFeet % feet) * 12)
    };
};

export {
    hectogramToKg,
    hectogramToLb,
    decimetersToMeter,
    decimetersToImperialHeight
};