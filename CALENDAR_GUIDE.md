# Calendar and Events Management Guide

This guide explains how to add new events to the ECE Club website calendar and manage existing events.

## Overview

The website has **three different calendar/event systems**:

1. **Google Calendar Embed** - Shows events from a Google Calendar (embedded on the Events page)
2. **React Big Calendar** - Shows events from `src/data/events.js` (used in EventsAndMentorship page)
3. **Events Page** - Manual event listings in `src/pages/Events.js` (Upcoming Events and Past Events sections)

## 1. Adding Events to Google Calendar Embed

The Google Calendar embed automatically displays events from your configured Google Calendar.

### Setup (One-time):
1. Create a Google Calendar for ECE Club events
2. Go to Google Calendar → Settings → Settings for my calendars → [Your Calendar]
3. Scroll to "Access permissions" and check "Make available to public"
4. Scroll to "Integrate calendar" and copy the Calendar ID
5. In `src/pages/Events.js`, replace `YOUR_CALENDAR_ID@group.calendar.google.com` with your actual Calendar ID (line 20)

### Adding Events:
- Simply add events directly to your Google Calendar
- Events will automatically appear in the embedded calendar on the website
- No code changes needed!

## 2. Adding Events to React Big Calendar

The React Big Calendar (used in EventsAndMentorship page) reads from `src/data/events.js`.

### To Add an Event:

1. Open `src/data/events.js`
2. Add a new event object to the array with the following structure:

```javascript
{
  id: 14,  // Use the next available ID number
  title: "Your Event Name",
  start: new Date(2025, 2, 15, 18, 0, 0),  // Year, Month (0-11), Day, Hour, Minute, Second
  end: new Date(2025, 2, 15, 20, 0, 0),    // End date/time
  desc: "Optional description"  // Optional
}
```

**Date Format Notes:**
- Months are 0-indexed (0 = January, 11 = December)
- Example: `new Date(2025, 2, 15, 18, 0, 0)` = March 15, 2025 at 6:00 PM
- For all-day events, add `allDay: true` and set end date to the same day

### Example:
```javascript
{
  id: 14,
  title: "ECE Club Meeting",
  start: new Date(2025, 2, 15, 18, 0, 0),  // March 15, 2025 at 6:00 PM
  end: new Date(2025, 2, 15, 20, 0, 0),    // March 15, 2025 at 8:00 PM
  desc: "Monthly club meeting"
}
```

## 3. Adding Events to Events Page (Upcoming/Past Events)

The Events page (`src/pages/Events.js`) has two sections:
- **Upcoming Events** (line ~217)
- **Past Events** (line ~298)

### To Add a New Event:

1. Open `src/pages/Events.js`
2. Decide if it's an upcoming or past event
3. Find the appropriate section (Upcoming Events or Past Events)
4. Copy an existing event block (look for the BrowserView/MobileView pattern)
5. Modify the copied block with your event details

### Event Block Structure:

Each event has two versions:
- **BrowserView** - Desktop layout (starts around line 220)
- **MobileView** - Mobile layout (starts around line 259)

**Key elements to modify:**
- `img src="/imgs/event_icons/YourImage.png"` - Event icon image path
- Event title text
- Date text
- Description text
- Links (Google Forms, Instagram, etc.)

### Required Event Image:
- Place event icon images in `public/imgs/event_icons/`
- Reference them as `/imgs/event_icons/YourImage.png`

### Example Event Block Template:

```jsx
<BrowserView>
    <div style={{ borderRadius: "20px", background: "white", padding: "20px", margin: "10px 30px 18px 30px" }}>
        <Typography>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div onClick={() => goToUrl("YOUR_LINK_URL")}>
                    <img src="/imgs/event_icons/YourImage.png" style={{ width: "140px", height: "140px" }} />                        
                </div>
                <div style={{ marginLeft: "20px", width: "calc(100% - 160px)" }}>
                    <Typography sx={{ cursor:'pointer', color: "#152a51", margin: "10px 0" }} variant="h5">
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <div onClick={() => goToUrl("YOUR_LINK_URL")} style={{ fontWeight: 'bold' }}> Your Event Name </div>
                            <div style={{ textAlign: "right" }}> Date Here </div>
                        </div>
                    </Typography>
                    <Typography sx={{ color: "#152a51", margin: "10px 0", overflowWrap: "break-word" }} variant="h6">
                        <div style={{textAlign: "justify"}}>
                            Your event description here.
                        </div>
                    </Typography>
                    <Typography
                        sx={{ color: "#152a51", margin: "10px 0", overflowWrap: "break-word", textDecoration: 'underline', cursor: 'pointer' }}
                        variant="h6"
                        onClick={() => goToUrl("YOUR_LINK_URL")}
                    >
                        Sign up today!
                    </Typography>
                </div>
            </div>
        </Typography>
    </div>
</BrowserView>
<MobileView>
    {/* Similar structure but with flexDirection: "column" */}
</MobileView>
```

## Moving Events from Upcoming to Past

When an event has passed:

1. Open `src/pages/Events.js`
2. Find the event in the "Upcoming Events" section
3. Copy the entire event block (both BrowserView and MobileView)
4. Delete it from "Upcoming Events"
5. Paste it into the "Past Events" section (after line 298)
6. Optionally remove "Sign up today!" links if registration is closed

## Quick Reference

| System | File Location | How to Add |
|--------|--------------|------------|
| Google Calendar Embed | `src/pages/Events.js` (line 20) | Add directly to Google Calendar |
| React Big Calendar | `src/data/events.js` | Add event object to array |
| Events Page Listings | `src/pages/Events.js` | Copy/paste event block template |

## Tips

- **Event Images**: Keep event icons consistent in size (140x140px for desktop, 200x200px for mobile)
- **Date Format**: Use format like "March 7th, 2025" for consistency
- **Links**: Update all `goToUrl()` calls with correct URLs
- **Testing**: Test both desktop (BrowserView) and mobile (MobileView) layouts
- **Order**: In Past Events, newer events typically appear first

## Need Help?

If you're unsure about any step:
1. Look at existing events as examples
2. Check the code comments in `Events.js`
3. Test changes locally with `npm start`

