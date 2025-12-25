This converts skins that are available in 64 x 64 png format (typical format) into voxelize character skins

Currently this doesn't support masks, and only base skins

Skin Requirements:
- **Head**: 8×8×8 (width × height × depth)
- **Body/Torso**: 8×12×4 (width × height × depth)
- **Right Arm**: 4×12×4 (width × height × depth)
- **Left Arm**: 4×12×4 (width × height × depth)
- **Right Leg**: 4×12×4 (width × height × depth)
- **Left Leg**: 4×12×4 (width × height × depth)

Store the skins in this location:
**Directory**: `voxelize/examples/client/src/assets/skins/`

To add new skins download skins online in the 64x64 pixel format and place inside the directory.

Each pixel is scaled to 0.1 voxelize units. 
- Base scale multiplier: `CHARACTER_SCALE = 0.9` (applied to all dimensions)

### Character Part Dimensions (in Voxelize units, before CHARACTER_SCALE)

#### Head
- Width: 0.8 (8 pixels)
- Height: 0.8 (8 pixels)
- Depth: 0.8 (8 pixels)

#### Body
- Width: 0.8 (8 pixels)
- Height: 1.2 (12 pixels)
- Depth: 0.4 (4 pixels)

#### Arms (Both Left and Right)
- Width: 0.4 (4 pixels)
- Height: 1.2 (12 pixels)
- Depth: 0.4 (4 pixels)

#### Legs (Both Left and Right)
- Width: 0.4 (4 pixels)
- Height: 1.2 (12 pixels)
- Depth: 0.4 (4 pixels)

Skin mapping:

### 1. Head
**Region**: x 0–31, y 0–15

- **Top of head**: x 8–15, y 0–7
- **Bottom of head**: x 16–23, y 0–7
- **Right side of head**: x 0–7, y 8–15
- **Front of head (face)**: x 8–15, y 8–15
- **Left side of head**: x 16–23, y 8–15
- **Back of head**: x 24–31, y 8–15

**Ignored**: x 32–63, y 0–15 (hat/head overlay)

### 2. Body/Torso
**Region**: x 16–39, y 16–31

- **Top of body (shoulders)**: x 20–27, y 16–19
- **Bottom of body (waist)**: x 28–35, y 16–19
- **Front of body (chest)**: x 20–27, y 20–31
- **Back of body**: x 32–39, y 20–31
- **Right side of body**: x 16–19, y 20–31
- **Left side of body**: x 28–31, y 20–31

### 3. Right Arm
**Region**: x 40–55, y 16–31

- **Top of right arm (shoulder)**: x 44–47, y 16–19
- **Bottom of right arm (wrist)**: x 48–51, y 16–19
- **Front of right arm**: x 44–47, y 20–31
- **Back of right arm**: x 52–55, y 20–31
- **Right side (outer)**: x 40–43, y 20–31
- **Left side (inner)**: x 48–51, y 20–31

### 4. Right Leg
**Region**: x 0–15, y 16–31

- **Top of right leg (hip)**: x 4–7, y 16–19
- **Bottom of right leg (sole)**: x 8–11, y 16–19
- **Front of right leg (shin)**: x 4–7, y 20–31
- **Back of right leg (calf)**: x 12–15, y 20–31
- **Right side (outer)**: x 0–3, y 20–31
- **Left side (inner)**: x 8–11, y 20–31

### 5. Left Leg
**Region**: x 16–31, y 48–63

- **Top of left leg (hip)**: x 4–7, y 48–51
- **Bottom of left leg (sole)**: x 8–11, y 48–51
- **Front of left leg**: x 4–7, y 52–63
- **Back of left leg**: x 12–15, y 52–63
- **Right side (inner)**: x 0–3, y 52–63
- **Left side (outer)**: x 8–11, y 52–63

### 6. Left Arm
**Region**: x 32–47, y 48–63

- **Top of left arm (shoulder)**: x 36–39, y 48–51
- **Bottom of left arm (wrist)**: x 40–43, y 48–51
- **Front of left arm**: x 36–39, y 52–63
- **Back of left arm**: x 44–47, y 52–63
- **Right side (inner)**: x 32–35, y 52–63
- **Left side (outer)**: x 40–43, y 52–63


### Face Names for paint() Method
Voxelize uses the following face identifiers:
- `"front"` - Front face (player view direction)
- `"back"` - Back face
- `"left"` - Left side
- `"right"` - Right side
- `"top"` - Top face
- `"bottom"` - Bottom face
- `"sides"` - All 4 sides (front, back, left, right)
- `"all"` - All 6 faces

### Character Parts Accessible via Code
```typescript
character.head      // CanvasBox for head
character.body      // CanvasBox for body
character.leftArm   // CanvasBox for left arm
character.rightArm  // CanvasBox for right arm
character.leftLeg   // CanvasBox for left leg
character.rightLeg  // CanvasBox for right leg
```