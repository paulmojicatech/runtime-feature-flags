## Implementing Feature Flags
This is a quick demo of how to implementing feature flags based on a user login.  The idea is that on login, a user would be issued a token with all the feature flags s/he is assigned to and the UI would render the correct component based on that token.

## Why is it useful?
This is good for testing a new feature that is not yet completely feature ready.  Users of the application can be assigned several flags enabled and test those features in a staging or testing environment without causing the original tests to fail.  This can also be useful in A / B testing where earlier adopters can have the flags turned on.

## What this demo does NOT address
This demo does not implement the preload strategy that comes out of the box with Angular via APP_INITIALIZER.  I will try to provide a demo for that when time permits me to do more research on it.  I believe the thought around that is that Angular's runtime engine (Ivy in version 9) can execute a preload strategy when the app initializes.

## What this demo does
The login has a picklist of 4 users.

 - Old: This user has no feature flags enabled.  On login, s/he will see the native input element.
 - featureA: This user has the feature flag that will show the input styled using Angular Material's matInput component.
 - featureB: This user has the feature flag that will show the input as Angular Material's autocomplete component, where the options are all the different users
 - allFeatures: This user has both feature flags (A and B) and on login, will see both features.

 
